import React from "react";

export default function BGGradient() {
    return (
        <div
            className="pointer-events-none fixed z-10 w-[200%] h-[200%] top-0 -right-3/4 left-auto rtl:-left-3/4 rtl:right-auto"
            style={{
                background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, transparent 60%)",
            }}
        />
    );
}
