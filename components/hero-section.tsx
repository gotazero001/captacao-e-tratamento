import { ArrowDown, Droplet } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-14 sm:pt-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-4 sm:left-10 w-32 sm:w-64 h-32 sm:h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-4 sm:right-10 w-48 sm:w-96 h-48 sm:h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      {/* Animated Water Drops - escondido em telas muito pequenas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {[...Array(6)].map((_, i) => (
          <Droplet
            key={i}
            className="absolute text-primary/20 animate-pulse"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              width: `${24 + i * 8}px`,
              height: `${24 + i * 8}px`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
        <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6 text-xs sm:text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
          Projeto Educacional
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance">
          Captação e Tratamento de{" "}
          <span className="text-primary">Água da Chuva</span>
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty px-2">
          Soluções práticas e sustentáveis para o reaproveitamento de água
          pluvial. Um recurso natural que pode transformar vidas.
        </p>

        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
          <Button asChild size="lg" className="text-sm sm:text-base px-6 sm:px-8 w-full sm:w-auto">
            <a href="#sistema">Conhecer o Sistema</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-sm sm:text-base px-6 sm:px-8 w-full sm:w-auto">
            <a href="#academico">Conexões Acadêmicas</a>
          </Button>
        </div>

        <a
          href="#sistema"
          className="inline-flex items-center justify-center mt-8 sm:mt-16 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Rolar para a seção Sistema"
        >
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
