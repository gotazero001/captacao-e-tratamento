"use client"

import { useState } from "react"
import {
  Droplets,
  Filter,
  Calculator,
  FlaskConical,
  Waves,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CisternaModal } from "./modals/cisterna-modal"
import { FiltroModal } from "./modals/filtro-modal"
import { CalculadoraModal } from "./modals/calculadora-modal"
import { AnalisadorModal } from "./modals/analisador-modal"
import { FirstFlushModal } from "./modals/first-flush-modal"

const systemItems = [
  {
    id: "cisterna",
    icon: Droplets,
    title: "Cisterna de Baixo Custo",
    subtitle: "DIY - Faça Você Mesmo",
    description:
      "Sistema de armazenamento acessível construído com materiais reutilizados como caixas d'água, bombonas e estruturas simples.",
  },
  {
    id: "filtro",
    icon: Filter,
    title: "Filtro de Carvão e Areia",
    subtitle: "Purificação Natural",
    description:
      "Método de filtragem que utiliza camadas de carvão ativado e areia para remover impurezas físicas e químicas da água.",
  },
  {
    id: "calculadora",
    icon: Calculator,
    title: "Calculadora de Economia",
    subtitle: "Projeção Financeira",
    description:
      "Ferramenta para calcular a economia potencial baseada na área de captação e nos índices pluviométricos da região.",
  },
  {
    id: "analisador",
    icon: FlaskConical,
    title: "Analisador de Qualidade",
    subtitle: "pH e Turbidez",
    description:
      "Equipamento para medir indicadores essenciais da qualidade da água: pH (acidez) e turbidez (partículas em suspensão).",
  },
  {
    id: "firstflush",
    icon: Waves,
    title: "Sistema First Flush",
    subtitle: "Descarte Inteligente",
    description:
      "Mecanismo que descarta automaticamente a primeira água coletada, que carrega mais poluentes acumulados no telhado.",
  },
]

export function SystemSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  return (
    <section id="sistema" className="py-12 sm:py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
            Como Funciona
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance px-2">
            Sistema de Captação e Tratamento
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-2">
            Conheça cada componente do nosso sistema integrado para
            aproveitamento sustentável da água da chuva.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {systemItems.map((item, index) => (
            <Card
              key={item.id}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/30 active:scale-[0.98] ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              onClick={() => setActiveModal(item.id)}
            >
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <CardTitle className="text-base sm:text-lg truncate">{item.title}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      {item.subtitle}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-3 sm:mt-4 p-0 h-auto text-primary hover:text-primary/80 text-xs sm:text-sm"
                >
                  Saiba mais
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modals */}
      <CisternaModal
        open={activeModal === "cisterna"}
        onOpenChange={(open) => !open && setActiveModal(null)}
      />
      <FiltroModal
        open={activeModal === "filtro"}
        onOpenChange={(open) => !open && setActiveModal(null)}
      />
      <CalculadoraModal
        open={activeModal === "calculadora"}
        onOpenChange={(open) => !open && setActiveModal(null)}
      />
      <AnalisadorModal
        open={activeModal === "analisador"}
        onOpenChange={(open) => !open && setActiveModal(null)}
      />
      <FirstFlushModal
        open={activeModal === "firstflush"}
        onOpenChange={(open) => !open && setActiveModal(null)}
      />
    </section>
  )
}
