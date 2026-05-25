"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Waves, ArrowDown, Trash2, Droplets } from "lucide-react"

interface FirstFlushModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const steps = [
  {
    icon: ArrowDown,
    title: "Início da Chuva",
    description:
      "A primeira água arrasta poeira, folhas, fezes de pássaros e poluentes acumulados no telhado.",
  },
  {
    icon: Trash2,
    title: "Desvio Automático",
    description:
      "O dispositivo first flush desvia os primeiros 1-2mm de chuva para um reservatório separado.",
  },
  {
    icon: Droplets,
    title: "Água Limpa",
    description:
      "Após o enchimento do first flush, a água mais limpa é direcionada para a cisterna principal.",
  },
]

export function FirstFlushModal({ open, onOpenChange }: FirstFlushModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-[calc(100%-2rem)] max-h-[85vh] overflow-y-auto mx-auto rounded-xl sm:rounded-2xl">
        <DialogHeader>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 text-primary flex-shrink-0">
              <Waves className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <DialogTitle className="text-base sm:text-xl font-serif leading-tight">
                Sistema First Flush
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm">
                Descarte Inteligente da Primeira Água
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6 mt-3 sm:mt-4">
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1.5 sm:mb-2">
              Por que descartar a primeira água?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Durante períodos secos, o telhado acumula diversos contaminantes:
              poeira, pólen, fezes de animais, folhas em decomposição e
              poluentes atmosféricos. A primeira água da chuva carrega toda essa
              sujeira e, se armazenada junto com o restante, contamina todo o
              reservatório.
            </p>
          </div>

          {/* Process Flow */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-foreground mb-3 sm:mb-4">
              Como Funciona
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-3 sm:gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex-shrink-0">
                      <step.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-4 sm:pb-6">
                    <h4 className="font-medium text-xs sm:text-sm text-foreground">{step.title}</h4>
                    <p className="text-[10px] sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Diagram */}
          <div className="p-3 sm:p-4 bg-muted rounded-lg">
            <h4 className="font-semibold text-xs sm:text-sm text-foreground mb-2 sm:mb-3">
              Dimensionamento
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              A regra geral é descartar os primeiros{" "}
              <strong className="text-foreground">1 a 2 litros</strong> por m²
              de área de captação. Para um telhado de 100m², o reservatório de
              first flush deve ter capacidade entre 100 e 200 litros.
            </p>
            <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-background rounded border border-border overflow-x-auto">
              <code className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                Volume First Flush = Área do Telhado (m²) × 1,5 litros
              </code>
            </div>
          </div>

          {/* Types */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2 sm:mb-3">
              Tipos de Dispositivos
            </h3>
            <div className="grid gap-2 sm:gap-3 sm:grid-cols-2">
              <div className="p-2.5 sm:p-3 rounded-lg border border-border">
                <h4 className="font-medium text-xs sm:text-sm text-foreground">
                  Desviador de Esfera
                </h4>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                  Uma bola flutua e fecha a entrada quando o reservatório enche.
                </p>
              </div>
              <div className="p-2.5 sm:p-3 rounded-lg border border-border">
                <h4 className="font-medium text-xs sm:text-sm text-foreground">
                  Câmara de Sedimentação
                </h4>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                  Tubo vertical com dreno lento que enche e transborda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
