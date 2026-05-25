import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SystemSection } from "@/components/system-section"
import { AcademicSection } from "@/components/academic-section"
import { BnccSection } from "@/components/bncc-section"
import { ConclusionSection } from "@/components/conclusion-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SystemSection />
      <AcademicSection />
      <BnccSection />
      <ConclusionSection />
      <Footer />
    </main>
  )
}
