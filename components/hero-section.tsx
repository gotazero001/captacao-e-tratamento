"use client"

import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      r: number
      a: number
    }> = []

    // Criar partículas
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 1,
        a: Math.random() * 0.5 + 0.3,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Desenhar gradient de fundo
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgba(15, 23, 42, 1)")
      gradient.addColorStop(0.5, "rgba(7, 89, 133, 0.1)")
      gradient.addColorStop(1, "rgba(15, 23, 42, 1)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Atualizar e desenhar partículas
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.fillStyle = `rgba(100, 200, 255, ${p.a})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24"
    >
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "#0f172a" }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />

      {/* 3D Water Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block" aria-hidden="true">
        <div className="water-orb water-orb-one" />
        <div className="water-orb water-orb-two" />
        <div className="water-orb water-orb-three" />
        <div className="water-cube">
          <div className="cube-face cube-front" />
          <div className="cube-face cube-back" />
          <div className="cube-face cube-right" />
          <div className="cube-face cube-left" />
          <div className="cube-face cube-top" />
          <div className="cube-face cube-bottom" />
        </div>
      </div>

      <div className="relative z-10 hero-content max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
        {/* Subtitle */}
        <span className="inline-block px-4 py-2 mb-6 sm:mb-8 text-xs sm:text-sm font-light text-cyan-300 uppercase tracking-widest">
          Solução Sustentável
        </span>

        {/* Main Heading - Massive Typography */}
        <h1 className="font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-balance leading-[1.1] mb-6 sm:mb-8">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-blue-400 to-cyan-500 font-black tracking-tighter">
            CAPTAÇÃO
          </span>
          <br />
          <span className="text-white font-extralight">
            e Tratamento de Água
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
          Explore o poder transformador da reutilização de água da chuva. 
          Da captação sustentável à filtragem caseira de precisão.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
          <Button 
            asChild 
            size="lg" 
            className="text-sm sm:text-base px-8 sm:px-10 py-3 w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 rounded-full font-medium uppercase tracking-wide"
          >
            <a href="#sistema">Explorar Sistema</a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="text-sm sm:text-base px-8 sm:px-10 py-3 w-full sm:w-auto border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/10 rounded-full font-medium uppercase tracking-wide"
          >
            <a href="#academico">Fundamentos</a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#sistema"
          className="inline-flex items-center justify-center mt-16 sm:mt-24 text-cyan-300/70 hover:text-cyan-300 transition-all group"
          aria-label="Rolar para a seção Sistema"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest font-light">Scroll</span>
            <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-y-1 transition-transform" />
          </div>
        </a>
      </div>
    </section>
  )
}
