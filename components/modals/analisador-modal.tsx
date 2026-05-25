"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { FlaskConical, AlertTriangle, CheckCircle2 } from "lucide-react"

interface AnalisadorModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const phScale = [
  { value: "0-6", label: "Ácido", color: "bg-red-500", status: "danger" },
  { value: "6-6.5", label: "Levemente Ácido", color: "bg-orange-400", status: "warning" },
  { value: "6.5-8.5", label: "Neutro/Ideal", color: "bg-green-500", status: "success" },
  { value: "8.5-9", label: "Levemente Alcalino", color: "bg-blue-400", status: "warning" },
  { value: "9-14", label: "Alcalino", color: "bg-blue-600", status: "danger" },
]

const turbidezLevels = [
  { ntu: "0-5", label: "Excelente", description: "Água cristalina", color: "bg-green-500" },
  { ntu: "5-10", label: "Boa", description: "Levemente turva", color: "bg-green-400" },
  { ntu: "10-25", label: "Regular", description: "Partículas visíveis", color: "bg-yellow-500" },
  { ntu: "25-100", label: "Ruim", description: "Turva", color: "bg-orange-500" },
  { ntu: ">100", label: "Péssima", description: "Muito turva", color: "bg-red-500" },
]

export function AnalisadorModal({ open, onOpenChange }: AnalisadorModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-[calc(100%-2rem)] max-h-[85vh] overflow-y-auto mx-auto rounded-xl sm:rounded-2xl">
        <DialogHeader>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 text-primary flex-shrink-0">
              <FlaskConical className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <DialogTitle className="text-base sm:text-xl font-serif leading-tight">
                Analisador de Qualidade da Água
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm">pH e Turbidez</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6 mt-3 sm:mt-4">
          {/* pH Section */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1.5 sm:mb-2">
              O que é pH?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
              O pH (potencial Hidrogeniônico) mede a acidez ou alcalinidade da
              água em uma escala de 0 a 14. A água ideal para consumo deve ter
              pH entre 6,5 e 8,5. Valores fora dessa faixa podem indicar
              contaminação ou corrosividade.
            </p>

            <div className="space-y-1.5 sm:space-y-2">
              <p className="text-xs sm:text-sm font-medium text-foreground">Escala de pH</p>
              <div className="flex rounded-lg overflow-hidden">
                {phScale.map((item) => (
                  <div
                    key={item.value}
                    className={`flex-1 ${item.color} p-1 sm:p-2 text-center`}
                  >
                    <p className="text-[8px] sm:text-xs font-bold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[10px] sm:text-xs text-muted-foreground">
                <span>Ácido</span>
                <span>Neutro</span>
                <span>Alcalino</span>
              </div>
            </div>
          </div>

          {/* Turbidez Section */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1.5 sm:mb-2">
              O que é Turbidez?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
              A turbidez mede a quantidade de partículas em suspensão na água,
              expressa em NTU (Unidade Nefelométrica de Turbidez). Água com alta
              turbidez pode conter micro-organismos patogênicos e reduz a
              eficácia da desinfecção.
            </p>

            <div className="space-y-1.5 sm:space-y-2">
              {turbidezLevels.map((level) => (
                <div
                  key={level.ntu}
                  className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg border border-border"
                >
                  <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${level.color} flex-shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs sm:text-sm font-medium text-foreground">
                        {level.label}
                      </span>
                      <span className="text-[10px] sm:text-xs text-muted-foreground flex-shrink-0">
                        {level.ntu} NTU
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">
                      {level.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Warning Box */}
          <div className="p-3 sm:p-4 bg-destructive/5 rounded-lg border border-destructive/20">
            <div className="flex items-start gap-2 sm:gap-3">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-xs sm:text-sm text-foreground">
                  Importante
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                  A água da chuva tratada em sistemas caseiros não é recomendada
                  para consumo direto sem tratamento adicional (cloração ou
                  fervura). Use para limpeza, irrigação e descarga sanitária.
                </p>
              </div>
            </div>
          </div>

          {/* Success Box */}
          <div className="p-3 sm:p-4 bg-accent/5 rounded-lg border border-accent/20">
            <div className="flex items-start gap-2 sm:gap-3">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-xs sm:text-sm text-foreground">
                  Teste Regular
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                  Recomenda-se testar a água mensalmente usando kits de teste
                  disponíveis em lojas de piscina ou laboratórios especializados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
