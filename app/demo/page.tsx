import { DemoClient } from "@/components/demo/demo-client"
import { AnimatedBackground } from "@/components/ui/animated-background"

export default function DemoPage() {
    return (
        <>
            <AnimatedBackground />
            <div className="container py-20 mx-auto px-4 max-w-screen-xl relative z-10 flex flex-col min-h-screen">
                <DemoClient />
            </div>
        </>
    )
}
