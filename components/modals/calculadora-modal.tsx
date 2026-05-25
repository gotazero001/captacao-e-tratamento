"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, Droplets, Wallet, Leaf } from "lucide-react"

interface CalculadoraModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CalculadoraModal({ open, onOpenChange }: CalculadoraModalProps) {
  const [area, setArea] = useState<string>("")
  const [pluviometria, setPluviometria] = useState<string>("1200")
  const [tarifaAgua, setTarifaAgua] = useState<string>("8.50")
  const [resultado, setResultado] = useState<{
    litrosAno: number
    economiaAnual: number
    co2Evitado: number
  } | null>(null)

  const calcular = () => {
    const areaNum = parseFloat(area)
    const pluvNum = parseFloat(pluviometria)
    const tarifaNum = parseFloat(tarifaAgua)

    if (isNaN(areaNum) || isNaN(pluvNum) || isNaN(tarifaNum)) return

    // Fórmula: Volume = Área × Pluviometria × Coeficiente de Runoff (0.8)
    const litrosAno = areaNum * pluvNum * 0.8
    const m3Ano = litrosAno / 1000
    const economiaAnual = m3Ano * tarifaNum
    // Estimativa: 0.5 kg CO2 por m³ de água tratada
    const co2Evitado = m3Ano * 0.5

    setResultado({
      litrosAno: Math.round(litrosAno),
      economiaAnual: Math.round(economiaAnual * 100) / 100,
      co2Evitado: Math.round(co2Evitado * 10) / 10,
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-[calc(100%-2rem)] max-h-[85vh] overflow-y-auto mx-auto rounded-xl sm:rounded-2xl">
        <DialogHeader>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 text-primary flex-shrink-0">
              <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <DialogTitle className="text-base sm:text-xl font-serif leading-tight">
                Calculadora de Economia Hídrica
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm">
                Projete sua economia baseada na pluviosidade
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6 mt-3 sm:mt-4">
          <div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Esta calculadora estima o volume de água que pode ser captado e a
              economia financeira gerada. Utiliza a fórmula:{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-[10px] sm:text-xs">
                Volume = Área × Pluviometria × 0.8
              </code>
            </p>
          </div>

          <div className="grid gap-3 sm:gap-4">
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="area" className="text-xs sm:text-sm">Área de Captação (m²)</Label>
              <Input
                id="area"
                type="number"
                inputMode="decimal"
                placeholder="Ex: 100"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="text-base sm:text-sm"
              />
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                Área do telhado ou superfície de coleta
              </p>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="pluviometria" className="text-xs sm:text-sm">Pluviometria Anual (mm)</Label>
              <Input
                id="pluviometria"
                type="number"
                inputMode="decimal"
                placeholder="Ex: 1200"
                value={pluviometria}
                onChange={(e) => setPluviometria(e.target.value)}
                className="text-base sm:text-sm"
              />
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                Média anual de chuva da sua região
              </p>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="tarifa" className="text-xs sm:text-sm">Tarifa de Água (R$/m³)</Label>
              <Input
                id="tarifa"
                type="number"
                inputMode="decimal"
                step="0.01"
                placeholder="Ex: 8.50"
                value={tarifaAgua}
                onChange={(e) => setTarifaAgua(e.target.value)}
                className="text-base sm:text-sm"
              />
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                Valor cobrado pela concessionária local
              </p>
            </div>

            <Button onClick={calcular} className="w-full text-sm sm:text-base">
              Calcular Economia
            </Button>
          </div>

          {resultado && (
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
              <div className="p-3 sm:p-4 bg-primary/5 rounded-lg border border-primary/20 text-center">
                <Droplets className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-1.5 sm:mb-2" />
                <p className="text-xl sm:text-2xl font-bold text-foreground">
                  {resultado.litrosAno.toLocaleString("pt-BR")}
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Litros por ano</p>
              </div>

              <div className="p-3 sm:p-4 bg-accent/5 rounded-lg border border-accent/20 text-center">
                <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-accent mx-auto mb-1.5 sm:mb-2" />
                <p className="text-xl sm:text-2xl font-bold text-foreground">
                  R$ {resultado.economiaAnual.toLocaleString("pt-BR")}
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Economia anual</p>
              </div>

              <div className="p-3 sm:p-4 bg-secondary rounded-lg border border-secondary/50 text-center">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-foreground mx-auto mb-1.5 sm:mb-2" />
                <p className="text-xl sm:text-2xl font-bold text-foreground">
                  {resultado.co2Evitado} kg
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  CO₂ evitado/ano
                </p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
