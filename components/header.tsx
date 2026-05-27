"use client"

import { useState, useEffect } from "react"
import { Menu, X, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sistema", href: "#sistema" },
  { label: "Acadêmico", href: "#academico" },
  { label: "BNCC", href: "#bncc" },
  { label: "Créditos", href: "#creditos" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Fecha o menu quando a tela for redimensionada para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Previne scroll quando o menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <a href="#inicio" className="flex items-center gap-3">
            <Droplets className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            <span className="font-serif text-xl sm:text-2xl font-semibold text-foreground">
              Água da Chuva
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-10 w-10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Menu Mobile com overlay */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 top-20 sm:top-24 bg-background/80 backdrop-blur-sm md:hidden z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <nav className="fixed inset-x-0 top-20 sm:top-24 bg-background border-b border-border md:hidden z-50 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col py-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-3 px-4 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors active:bg-muted/80"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
