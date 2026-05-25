"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Layers, Wrench, BookOpen, Box } from "lucide-react"
import dynamic from "next/dynamic"

const Filtro3D = dynamic(
  () => import("@/components/3d/filtro-3d").then((mod) => mod.Filtro3D),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[280px] sm:h-[320px] bg-muted rounded-lg flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground text-sm">Carregando modelo 3D...</div>
      </div>
    )
  }
)

interface FiltroModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const layers = [
  {
    name: "Pedras Grandes",
    description: "Base do filtro, suporte estrutural",
    color: "bg-muted-foreground/30",
  },
  {
    name: "Pedras Médias",
    description: "Filtragem grosseira inicial",
    color: "bg-muted-foreground/40",
  },
  {
    name: "Areia Grossa",
    description: "Retenção de partículas maiores",
    color: "bg-secondary",
  },
  {
    name: "Areia Fina",
    description: "Filtragem de partículas menores",
    color: "bg-secondary/80",
  },
  {
    name: "Carvão Ativado",
    description: "Adsorção de impurezas químicas",
    color: "bg-foreground/80",
  },
]

const tutorialSteps = [
  {
    step: 1,
    title: "Escolher o Recipiente",
    description: "Utilize uma garrafa PET de 2L ou 5L, ou um tubo de PVC de 100mm com pelo menos 40cm de comprimento. Corte o fundo da garrafa ou tampe uma extremidade do tubo.",
    tip: "Garrafas PET transparentes permitem visualizar as camadas.",
  },
  {
    step: 2,
    title: "Preparar as Pedras Grandes",
    description: "Lave bem as pedras grandes (aproximadamente 2-3cm) e coloque uma camada de 5cm no fundo do recipiente. Elas servem como suporte estrutural.",
    tip: "Use pedras de rio ou brita limpa, evite pedras calcárias.",
  },
  {
    step: 3,
    title: "Adicionar Pedras Médias",
    description: "Coloque uma camada de 5cm de pedras médias (aproximadamente 1cm) sobre as pedras grandes. Esta camada faz a filtragem inicial.",
    tip: "Lave várias vezes até a água sair limpa.",
  },
  {
    step: 4,
    title: "Camada de Areia Grossa",
    description: "Adicione 8cm de areia grossa (areia de construção lavada). Esta camada retém partículas maiores em suspensão.",
    tip: "A areia deve ser lavada até não soltar mais sujeira.",
  },
  {
    step: 5,
    title: "Camada de Areia Fina",
    description: "Coloque 8cm de areia fina (areia de praia lavada ou areia para filtro). Responsável pela filtragem de partículas menores.",
    tip: "Quanto mais fina a areia, melhor a filtragem, mas mais lento o fluxo.",
  },
  {
    step: 6,
    title: "Carvão Ativado no Topo",
    description: "Adicione 5cm de carvão ativado (ou carvão vegetal triturado). O carvão adsorve cloro, pesticidas e compostos orgânicos.",
    tip: "Carvão ativado pode ser comprado em pet shops ou lojas de aquário.",
  },
  {
    step: 7,
    title: "Instalar a Saída",
    description: "Faça um pequeno furo na tampa da garrafa ou na extremidade inferior do tubo. Adicione algodão ou tecido TNT para evitar que a areia escape.",
    tip: "O furo deve ser pequeno para controlar o fluxo de água.",
  },
  {
    step: 8,
    title: "Testar o Filtro",
    description: "Passe água limpa pelo filtro 2-3 vezes antes do primeiro uso. Isso remove partículas soltas e ativa o carvão.",
    tip: "Descarte a água das primeiras filtragens.",
  },
]

export function FiltroModal({ open, onOpenChange }: FiltroModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl w-[calc(100%-2rem)] max-h-[85vh] overflow-y-auto mx-auto rounded-xl sm:rounded-2xl">
        <DialogHeader>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 text-primary flex-shrink-0">
              <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <DialogTitle className="text-base sm:text-xl font-serif leading-tight">
                Filtro de Carvão Ativado e Areia
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm">Purificação Física e Química</DialogDescription>
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
              <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1.5 sm:mb-2">
                Como Funciona?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                O filtro utiliza o princípio da <strong>separação de misturas</strong>,
                um conceito fundamental da Química. A água passa por camadas de
                diferentes materiais que retêm impurezas progressivamente menores,
                desde partículas visíveis até compostos químicos dissolvidos.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Camadas do Filtro
              </h3>
              <div className="space-y-1.5 sm:space-y-2">
                {layers.map((layer, index) => (
                  <div
                    key={layer.name}
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg border border-border"
                  >
                    <div
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded ${layer.color} flex items-center justify-center text-[10px] sm:text-xs font-bold text-primary-foreground flex-shrink-0`}
                    >
                      {index + 1}
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-xs sm:text-sm text-foreground">
                        {layer.name}
                      </p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">
                        {layer.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              <div className="p-3 sm:p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-xs sm:text-sm text-primary mb-1">
                  Filtragem Física
                </h4>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  As camadas de areia e pedras removem partículas sólidas por
                  peneiração, retendo sedimentos de diferentes tamanhos.
                </p>
              </div>
              <div className="p-3 sm:p-4 bg-accent/5 rounded-lg border border-accent/20">
                <h4 className="font-semibold text-xs sm:text-sm text-accent mb-1">
                  Filtragem Química
                </h4>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  O carvão ativado adsorve moléculas de cloro, pesticidas e
                  compostos orgânicos através de suas microporos.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tutorial" className="space-y-4 mt-4">
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="font-semibold text-sm text-primary mb-1">Tutorial Passo a Passo</h3>
              <p className="text-xs text-muted-foreground">
                Aprenda a construir seu próprio filtro de carvão e areia com materiais simples.
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

            <div className="p-3 sm:p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <h4 className="font-semibold text-xs sm:text-sm text-destructive mb-1">
                Aviso Importante
              </h4>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                Este filtro melhora a qualidade da água, mas não a torna potável.
                Para consumo humano, a água ainda precisa ser fervida ou tratada com cloro.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="3d" className="space-y-4 mt-4">
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="font-semibold text-sm text-primary mb-1">Modelo 3D Interativo</h3>
              <p className="text-xs text-muted-foreground">
                Explore o modelo 3D do filtro. Arraste para rotacionar e use o scroll para dar zoom.
              </p>
            </div>

            <Filtro3D />

            <div className="grid gap-2 sm:grid-cols-2">
              <div className="p-3 bg-muted rounded-lg">
                <h4 className="font-semibold text-xs text-foreground mb-1">Camadas (de cima para baixo)</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Carvão ativado (preto)</li>
                  <li>• Areia fina (amarelo claro)</li>
                  <li>• Areia grossa (amarelo)</li>
                  <li>• Pedras médias (cinza claro)</li>
                  <li>• Pedras grandes (cinza escuro)</li>
                </ul>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <h4 className="font-semibold text-xs text-foreground mb-1">Princípio de Funcionamento</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>1. Água entra pelo topo</li>
                  <li>2. Carvão adsorve químicos</li>
                  <li>3. Areias filtram partículas</li>
                  <li>4. Pedras dão suporte</li>
                  <li>5. Água limpa sai embaixo</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
