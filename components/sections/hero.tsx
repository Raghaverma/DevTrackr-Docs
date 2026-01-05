import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, Terminal, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

export function Hero() {
    return (
        <section className="relative overflow-hidden py-24 lg:py-40">
            <div className="container relative z-10 flex flex-col items-center text-center mx-auto px-4 max-w-screen-xl">
                {/* Badge */}
                <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-luxury-silver backdrop-blur-md animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
                    <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 shadow-[0_0_10px_#22c55e]"></span>
                    v1.0.0 Now Available
                    <ChevronRight className="ml-1 h-3 w-3 text-white/50" />
                </div>

                {/* Heading */}
                <h1 className="mb-8 max-w-5xl bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl lg:text-8xl animate-slide-up opacity-0" style={{ animationDelay: "0.2s" }}>
                    Production-Grade GitHub Data SDK
                </h1>

                {/* Subheading */}
                <p className="mb-12 max-w-2xl text-xl text-luxury-silver sm:text-2xl animate-slide-up opacity-0" style={{ animationDelay: "0.3s" }}>
                    Build stunning developer portfolios and dashboards with type-safe, cached, and normalized GitHub data.
                </p>

                {/* Buttons */}
                <div className="flex flex-col gap-4 sm:flex-row mb-20 animate-slide-up opacity-0" style={{ animationDelay: "0.4s" }}>
                    <Link href="/docs">
                        <Button size="lg" className="h-14 px-8 text-lg bg-white text-black hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 font-semibold rounded-full">
                            Get Started
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                    <Link href="/demo">
                        <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 rounded-full">
                            View Live Demo
                        </Button>
                    </Link>
                </div>

                {/* Terminal */}
                <div className="relative w-full max-w-4xl rounded-xl border border-white/10 bg-[#0A0A0A]/90 p-4 shadow-2xl backdrop-blur-md sm:p-6 lg:p-8 animate-slide-up opacity-0" style={{ animationDelay: "0.5s" }}>
                    <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                    {/* Terminal Header */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                            <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                        </div>
                        <div className="text-xs font-mono text-white/30">bash — 80x24</div>
                    </div>

                    {/* Terminal Content */}
                    <div className="space-y-4 font-mono text-sm sm:text-base text-left">
                        <div className="flex items-center text-luxury-silver">
                            <span className="mr-3 text-green-500">$</span>
                            <span className="typewriter">npm install devtrackr</span>
                        </div>
                        <div className="pl-6 text-white/40">
                            <div>added 1 package, and audited 2 packages in 1s</div>
                            <div>found 0 vulnerabilities</div>
                        </div>

                        <div className="flex items-start pt-4">
                            <span className="mr-3 text-blue-500">?</span>
                            <div className="flex-1">
                                <pre className="text-white/90 overflow-x-auto">
                                    <span className="text-purple-400">import</span> {"{"} createDevTrackr {"}"} <span className="text-purple-400">from</span> <span className="text-green-400">'devtrackr'</span>;{'\n\n'}
                                    <span className="text-gray-500">// Initialize with type-safety</span>{'\n'}
                                    <span className="text-purple-400">const</span> client = createDevTrackr({"{"} token: process.env.GITHUB_TOKEN {"}"});{'\n\n'}
                                    <span className="text-gray-500">// Fetch normalized user data</span>{'\n'}
                                    <span className="text-purple-400">const</span> profile = <span className="text-purple-400">await</span> client.getProfile(<span className="text-green-400">'raghaverma'</span>);
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
