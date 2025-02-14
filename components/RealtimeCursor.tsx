"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";

interface CursorData {
    user_id: string;
    x_position: number;
    y_position: number;
}

export default function RealtimeCursor() {
    const [cursors, setCursors] = useState<Record<string, CursorData>>({});
    const userId = typeof window !== "undefined" ? localStorage.getItem("user_id") || crypto.randomUUID() : "";

    useEffect(() => {
        if (typeof window !== "undefined") localStorage.setItem("user_id", userId);

        const handleMouseMove = async (e: MouseEvent) => {
            await supabase.from("cursors").upsert([
                { user_id: userId, x_position: e.clientX, y_position: e.clientY }
            ]);
        };

        document.addEventListener("mousemove", handleMouseMove);

        const subscription = supabase
            .channel("cursors")
            .on("postgres_changes", { event: "*", schema: "public", table: "cursors" }, (payload) => {
                setCursors((prev) => ({ ...prev, [payload.new.user_id]: payload.new }));
            })
            .subscribe();

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            subscription.unsubscribe();
        };
    }, []);

    return (
        <div>
            {Object.values(cursors).map((cursor) => (
                <div
                    key={cursor.user_id}
                    style={{
                        position: "absolute",
                        left: cursor.x_position,
                        top: cursor.y_position,
                        background: "red",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        transition: "left 0.1s, top 0.1s",
                    }}
                />
            ))}
        </div>
    );
}