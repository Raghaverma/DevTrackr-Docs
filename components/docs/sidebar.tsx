"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const docsConfig = {
    sidebarNav: [
        {
            title: "Getting Started",
            items: [
                {
                    title: "Introduction",
                    href: "/docs",
                },
                {
                    title: "Installation",
                    href: "/docs#installation",
                },
                {
                    title: "Authentication",
                    href: "/docs#authentication",
                },
                {
                    title: "Quick Start",
                    href: "/docs#quick-start",
                },
            ],
        },
        {
            title: "API Reference",
            items: [
                {
                    title: "createDevTrackr",
                    href: "/docs#createDevTrackr",
                },
                {
                    title: "getProfile",
                    href: "/docs#getProfile",
                },
                {
                    title: "getRepositories",
                    href: "/docs#getRepositories",
                },
                {
                    title: "getRecentCommits",
                    href: "/docs#getRecentCommits",
                },
                {
                    title: "getLanguageStats",
                    href: "/docs#getLanguageStats",
                },
                {
                    title: "getContributionStats",
                    href: "/docs#getContributionStats",
                },
                {
                    title: "getActivityTimeline",
                    href: "/docs#getActivityTimeline",
                },
            ],
        },
        {
            title: "Data Models",
            items: [
                {
                    title: "Profile Schema",
                    href: "/docs#schema-profile",
                },
                {
                    title: "Repository Schema",
                    href: "/docs#schema-repo",
                },
            ],
        },
        {
            title: "Errors",
            items: [
                {
                    title: "Error Handling",
                    href: "/docs#errors",
                },
            ],
        },
    ],
}

interface DocsSidebarProps {
    className?: string;
}

export function DocsSidebar({ className }: DocsSidebarProps) {
    const pathname = usePathname()

    return (
        <div className={cn("pb-12 h-screen border-r border-border", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-4 px-4 text-lg font-bold tracking-tight text-white">
                        Documentation
                    </h2>
                    <div className="space-y-6">
                        {docsConfig.sidebarNav.map((section, i) => (
                            <div key={i}>
                                <h4 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-luxury-silver/80">
                                    {section.title}
                                </h4>
                                <div className="space-y-1">
                                    {section.items.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={cn(
                                                "block rounded-md px-4 py-2 text-sm font-medium transition-all duration-200",
                                                pathname === item.href
                                                    ? "bg-luxury-charcoal text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                                                    : "text-luxury-silver hover:text-white hover:bg-white/5"
                                            )}
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
