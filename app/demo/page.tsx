import { DemoClient } from "@/components/demo/demo-client"
import { AnimatedBackground } from "@/components/ui/animated-background"

export default function DemoPage() {
    return (
        <>
            <AnimatedBackground />
            <div className="container py-20 mx-auto px-4 max-w-screen-xl relative z-10 flex flex-col min-h-screen">
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Live Demo</h1>
                    <p className="text-lg text-luxury-silver">
                        Experience the power of normalized GitHub data. Enter any username to fetch detailed statistics in real-time.
                    </p>
                </div>
                <DemoClient />
            </div>
        </>
    )
}
