"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from 'uuid';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function OnlineUsers() {
  const [onlineUsers, setOnlineUsers] = useState<number>(0);

  useEffect(() => {
    // Get or create a unique ID for this browser
    let userId = localStorage.getItem('visitor_id');
    if (!userId) {
      userId = uuidv4();
      localStorage.setItem('visitor_id', userId);
    }

    const channel = supabase.channel('online-users');
    
    channel
      .on('presence', { event: 'sync' }, () => {
        const presenceState = channel.presenceState();
        // Count unique users based on visitor_id
        const uniqueUsers = new Set(
          Object.values(presenceState)
            .flat()
            .map((user: any) => user.visitor_id)
        ).size;
        setOnlineUsers(uniqueUsers);
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await channel.track({
            online_at: new Date().toISOString(),
            visitor_id: userId // Include the visitor ID in presence data
          });
        }
      });

    return () => {
      channel.unsubscribe();
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      <span className="text-sm">{onlineUsers} online</span>
    </div>
  );
}
