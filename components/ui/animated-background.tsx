"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function AnimatedBackground() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-luxury-black pointer-events-none">
            {/* Mesh Gradient */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.05),_transparent_25%)]" />
            <div className="absolute top-0 left-0 right-0 h-[500px] opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-luxury-silver via-luxury-charcoal to-transparent" />

            {/* Floating Shapes */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-luxury-charcoal blur-[80px] opacity-20"
            />

            <motion.div
                animate={{
                    y: [0, 30, 0],
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                className="absolute bottom-1/3 right-1/3 h-96 w-96 rounded-full bg-luxury-gray blur-[100px] opacity-10"
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#40404012_1px,transparent_1px),linear-gradient(to_bottom,#40404012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
    )
}
