"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";

export default function OnlineUsers() {
    const [onlineUsers, setOnlineUsers] = useState<number>(0);

    useEffect(() => {
        const subscription = supabase
            .channel("*")
            .on("presence", { event: "sync" }, ({ newUsers }) => {
                setOnlineUsers(newUsers.length);
            })
            .subscribe();

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return <h2>Online Users: {onlineUsers}</h2>;
}