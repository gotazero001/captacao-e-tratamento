"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Droplets, Wrench, BookOpen, Box } from "lucide-react"
import dynamic from "next/dynamic"

const Cisterna3D = dynamic(
  () => import("@/components/3d/cisterna-3d").then((mod) => mod.Cisterna3D),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[280px] sm:h-[320px] bg-muted rounded-lg flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground text-sm">Carregando modelo 3D...</div>
      </div>
    )
  }
)

interface CisternaModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const materials = [
  "Caixa d'água de 1000L ou bombona",
  "Calhas e condutores de PVC",
  "Filtro de entrada (tela fina)",
  "Registro de saída",
  "Conexões e vedações",
  "Suporte ou base de concreto",
]

const benefits = [
  "Custo reduzido comparado a sistemas comerciais",
  "Fácil instalação e manutenção",
  "Adaptável a diferentes espaços",
  "Impacto social positivo",
]

const tutorialSteps = [
  {
    step: 1,
    title: "Preparar a Base",
    description: "Nivele o terreno e construa uma base de concreto ou blocos que suporte o peso da cisterna cheia (aproximadamente 1000kg para 1000L).",
    tip: "A base deve ter pelo menos 10cm de altura para facilitar a instalação do registro de saída.",
  },
  {
    step: 2,
    title: "Posicionar a Caixa",
    description: "Coloque a caixa d'água sobre a base, certificando-se de que está bem nivelada e estável.",
    tip: "Prefira locais sombreados para evitar proliferação de algas.",
  },
  {
    step: 3,
    title: "Instalar as Calhas",
    description: "Fixe as calhas no beiral do telhado com suportes a cada 60cm. Certifique-se de que haja inclinação de 1% em direção ao condutor.",
    tip: "Use silicone nas juntas para evitar vazamentos.",
  },
  {
    step: 4,
    title: "Conectar o Condutor",
    description: "Instale o tubo condutor vertical conectando a calha à entrada da cisterna. Adicione um filtro de tela na entrada.",
    tip: "O filtro de tela evita entrada de folhas e detritos maiores.",
  },
  {
    step: 5,
    title: "Instalar o Registro de Saída",
    description: "Faça um furo na parte inferior da caixa e instale o registro com vedação de borracha. Conecte a tubulação de distribuição.",
    tip: "Use veda-rosca e cola para PVC nas conexões.",
  },
  {
    step: 6,
    title: "Teste e Acabamento",
    description: "Feche todas as aberturas exceto a entrada. Aguarde a primeira chuva ou faça um teste com mangueira para verificar vazamentos.",
    tip: "Instale um ladrão (extravasor) para evitar transbordamento.",
  },
]

export function CisternaModal({ open, onOpenChange }: CisternaModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl w-[calc(100%-2rem)] max-h-[85vh] overflow-y-auto mx-auto rounded-xl sm:rounded-2xl">
        <DialogHeader>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 text-primary flex-shrink-0">
              <Droplets className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <DialogTitle className="text-base sm:text-xl font-serif">
                Cisterna de Baixo Custo
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm">DIY - Faça Você Mesmo</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="info" className="mt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="info" className="text-xs sm:text-sm gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Informações</span>
              <span className="sm:hidden">Info</span>
            </TabsTrigger>
            <TabsTrigger value="tutorial" className="text-xs sm:text-sm gap-1.5">
              <Wrench className="w-3.5 h-3.5" />
              Tutorial
            </TabsTrigger>
            <TabsTrigger value="3d" className="text-xs sm:text-sm gap-1.5">
              <Box className="w-3.5 h-3.5" />
              Modelo 3D
            </TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="space-y-4 sm:space-y-6 mt-4">
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1.5 sm:mb-2">O que é?</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                A cisterna de baixo custo é um reservatório simples para armazenar
                água da chuva, construído com materiais acessíveis e reutilizados.
                É uma solução democrática que permite que famílias de diferentes
                classes sociais tenham acesso a um sistema de captação eficiente.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2 sm:mb-3">
                Materiais Utilizados
              </h3>
              <ul className="grid gap-1.5 sm:gap-2">
                {materials.map((material) => (
                  <li key={material} className="flex items-start gap-2 text-xs sm:text-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{material}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2 sm:mb-3">
                Importância Social
              </h3>
              <ul className="grid gap-1.5 sm:gap-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-xs sm:text-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 sm:p-4 bg-muted rounded-lg">
              <p className="text-xs sm:text-sm text-muted-foreground">
                <strong className="text-foreground">Dica:</strong> Uma cisterna de
                1000 litros pode suprir as necessidades de uma família para
                atividades como limpeza, irrigação e descarga sanitária por
                semanas em períodos de estiagem.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="tutorial" className="space-y-4 mt-4">
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="font-semibold text-sm text-primary mb-1">Tutorial Passo a Passo</h3>
              <p className="text-xs text-muted-foreground">
                Siga estas etapas para construir sua própria cisterna de baixo custo.
              </p>
            </div>

            <div className="space-y-3">
              {tutorialSteps.map((item) => (
                <div 
                  key={item.step}
                  className="p-3 sm:p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                        {item.description}
                      </p>
                      <div className="p-2 bg-amber-100 dark:bg-amber-950 rounded text-xs text-amber-900 dark:text-amber-100 border border-amber-200 dark:border-amber-800">
                        <strong className="text-amber-700 dark:text-amber-300">Dica:</strong> {item.tip}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="3d" className="space-y-4 mt-4">
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="font-semibold text-sm text-primary mb-1">Modelo 3D Interativo</h3>
              <p className="text-xs text-muted-foreground">
                Explore o modelo 3D da cisterna. Arraste para rotacionar e use o scroll para dar zoom.
              </p>
            </div>

            <Cisterna3D />

            <div className="grid gap-2 sm:grid-cols-2">
              <div className="p-3 bg-muted rounded-lg">
                <h4 className="font-semibold text-xs text-foreground mb-1">Componentes Principais</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Caixa d'água de 1000L (azul)</li>
                  <li>• Base de concreto (cinza)</li>
                  <li>• Calha de entrada (metal)</li>
                  <li>• Registro de saída (vermelho)</li>
                </ul>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <h4 className="font-semibold text-xs text-foreground mb-1">Fluxo da Água</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>1. Chuva cai no telhado</li>
                  <li>2. Água escoa pelas calhas</li>
                  <li>3. Passa pelo filtro de tela</li>
                  <li>4. Armazena na cisterna</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
