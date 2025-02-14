"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import { generateRandomCursor } from "@/lib/generate-random-cursor";
import { motion } from "framer-motion";

interface CursorData {
    id: string;
    user_id: string;
    x_position: number;
    y_position: number;
    last_updated: string;
    color: string;
    message: string;
    is_typing: boolean;
}

export default function RealtimeCursor() {
    const [cursors, setCursors] = useState<Record<string, CursorData>>({});
    const [isTyping, setIsTyping] = useState(false);
    const [message, setMessage] = useState("");
    const userId = typeof window !== "undefined" ? localStorage.getItem("user_id") || crypto.randomUUID() : "";
    const [cursorStyle] = useState(generateRandomCursor());

    const updateCursorPosition = async (x: number, y: number, typing = isTyping, msg = message) => {
        await supabase.from("cursors").upsert([{
            user_id: userId,
            x_position: x,
            y_position: y + window.scrollY,
            color: cursorStyle.color,
            is_typing: typing,
            message: msg,
            last_updated: new Date().toISOString()
        }]);
    };

    useEffect(() => {
        if (typeof window !== "undefined") localStorage.setItem("user_id", userId);

        const handleMouseMove = async (e: MouseEvent) => {
            await updateCursorPosition(e.clientX, e.clientY);
        };

        const handleKeyDown = async (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                if (isTyping && message) {
                    await updateCursorPosition(
                        cursors[userId]?.x_position || 0,
                        (cursors[userId]?.y_position || 0) - window.scrollY,
                        false,
                        message
                    );
                    setTimeout(() => {
                        setMessage("");
                        setIsTyping(false);
                    }, 2000);
                } else {
                    setIsTyping(true);
                }
            } else if (e.key === 'Escape' && isTyping) {
                setIsTyping(false);
                setMessage("");
                await updateCursorPosition(
                    cursors[userId]?.x_position || 0,
                    (cursors[userId]?.y_position || 0) - window.scrollY,
                    false,
                    ""
                );
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("keydown", handleKeyDown);

        const subscription = supabase
            .channel("cursors")
            .on("postgres_changes", { event: "*", schema: "public", table: "cursors" }, (payload) => {
                if (payload.new.user_id !== userId) {
                    setCursors((prev) => ({ ...prev, [payload.new.user_id]: payload.new }));
                }
            })
            .subscribe();

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("keydown", handleKeyDown);
            subscription.unsubscribe();
        };
    }, [userId, cursorStyle, isTyping, message]);

    const handleMessageUpdate = async (newMessage: string) => {
        setMessage(newMessage);
        await updateCursorPosition(
            cursors[userId]?.x_position || 0,
            (cursors[userId]?.y_position || 0) - window.scrollY,
            true,
            newMessage
        );
    };

    return (
        <div className="fixed inset-0 pointer-events-none isolate" style={{ zIndex: 999999 }}>
            {Object.values(cursors)
                .filter(cursor => cursor.user_id !== userId)
                .map((cursor) => (
                    <motion.div
                        key={cursor.user_id}
                        className="absolute"
                        initial={false}
                        animate={{
                            left: cursor.x_position,
                            top: cursor.y_position - window.scrollY,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeOut",
                        }}
                    >
                        <svg
                            width="24"
                            height="36"
                            viewBox="0 0 24 36"
                            fill="none"
                            className="transform -translate-x-1/4 -translate-y-1/4"
                        >
                            <path
                                d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
                                fill={cursor.color || cursorStyle.color}
                                stroke="white"
                                strokeWidth="1"
                            />
                        </svg>

                        {cursor.is_typing && (
                            <div 
                                className="absolute px-4 py-2 rounded-full bg-black/80 text-white whitespace-nowrap transition-all"
                                style={{
                                    transform: 'translateX(20px)',
                                }}
                            >
                                {cursor.message || (
                                    <div className="flex space-x-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:0.2s]" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:0.4s]" />
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                ))}
            {isTyping && (
                <input
                    type="text"
                    value={message}
                    onChange={(e) => handleMessageUpdate(e.target.value)}
                    className="fixed bottom-4 left-1/2 -translate-x-1/2 w-64 px-4 py-2 rounded-full bg-black/80 text-white outline-none pointer-events-auto"
                    placeholder="Type your message..."
                    autoFocus
                />
            )}
        </div>
    );
}