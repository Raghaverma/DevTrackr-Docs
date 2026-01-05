import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Installation } from "@/components/sections/installation"
import { AnimatedBackground } from "@/components/ui/animated-background"

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <div className="flex min-h-screen flex-col relative z-0">
        <Hero />
        <Features />
        <Installation />
      </div>
    </>
  )
}
