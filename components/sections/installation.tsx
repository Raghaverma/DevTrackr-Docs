"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Copy, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"

export function Installation() {
    const [activeTab, setActiveTab] = useState("npm")
    const [copied, setCopied] = useState(false)

    const commands: Record<string, string> = {
        npm: "npm install devtrackr",
        yarn: "yarn add devtrackr",
        pnpm: "pnpm add devtrackr",
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(commands[activeTab])
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section className="border-t border-white/5 bg-luxury-black/30 backdrop-blur-sm py-20 lg:py-32 relative z-10">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div>
                        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Get up and running in seconds
                        </h2>
                        <p className="mb-8 text-lg text-luxury-silver">
                            Devtrackr is designed to be dropped into any project with minimal configuration.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Install with your favorite package manager",
                                "Generate a GitHub Personal Access Token",
                                "Initialize the client and start fetching",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white">
                                        <Check className="h-3.5 w-3.5" />
                                    </div>
                                    <span className="text-luxury-silver">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden">
                        {/* Tab Header */}
                        <div className="flex items-center gap-4 px-4 py-3 border-b border-white/5 bg-white/5">
                            <div className="flex gap-2">
                                {["npm", "yarn", "pnpm"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={cn(
                                            "text-xs font-medium px-3 py-1 rounded-full transition-all",
                                            activeTab === tab ? "bg-white text-black" : "text-luxury-silver hover:text-white"
                                        )}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Command Area */}
                        <div className="p-8 flex items-center justify-between group">
                            <div className="font-mono text-sm sm:text-base text-white">
                                <span className="text-luxury-silver mr-2">$</span>
                                {commands[activeTab]}
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={handleCopy}
                                className="h-8 w-8 text-luxury-silver hover:text-white hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                            >
                                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
