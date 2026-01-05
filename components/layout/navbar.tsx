import Link from "next/link"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-luxury-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-luxury-black/60">
            <div className="container flex h-16 max-w-screen-2xl items-center mx-auto px-4">
                <div className="mr-8 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2 group">
                        <div className="h-6 w-6 rounded-md bg-white text-black flex items-center justify-center font-bold text-xs group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
                            DT
                        </div>
                        <span className="hidden font-bold sm:inline-block text-luxury-white text-lg tracking-tight">
                            DevTrackr
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium text-luxury-silver">
                        <Link href="/docs" className="transition-colors hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                            Documentation
                        </Link>
                        <Link href="/demo" className="transition-colors hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                            Live Demo
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none" />
                    <nav className="flex items-center space-x-4">
                        <Link
                            href="https://github.com/Raghaverma/Devtrackr"
                            target="_blank"
                            rel="noreferrer"
                            className="text-luxury-silver hover:text-white transition-colors"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>
                        <Link href="/docs">
                            <Button size="sm" className="h-9 bg-white text-black hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all font-semibold rounded-md px-4">
                                Get Started
                            </Button>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
