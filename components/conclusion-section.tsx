import { CheckCircle2, Droplets, Leaf, Wallet, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const keyPoints = [
  {
    icon: Droplets,
    text: "A captação de água da chuva é uma solução acessível e eficiente",
  },
  {
    icon: Leaf,
    text: "O tratamento adequado garante água segura para usos não potáveis",
  },
  {
    icon: Wallet,
    text: "A economia financeira pode ser significativa ao longo do tempo",
  },
  {
    icon: Globe,
    text: "Cada gota reaproveitada contribui para a sustentabilidade global",
  },
]

export function ConclusionSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Considerações Finais
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance px-2">
            Conclusão
          </h2>
        </div>

        <div className="prose prose-sm sm:prose-lg max-w-none text-center mb-8 sm:mb-12">
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-pretty px-2">
            O reaproveitamento de água da chuva representa uma das formas mais
            democráticas e sustentáveis de gestão hídrica. Com sistemas simples
            e de baixo custo, qualquer residência pode contribuir para a
            preservação dos recursos naturais enquanto reduz gastos com água
            tratada.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mt-3 sm:mt-4 text-pretty px-2">
            Este projeto demonstrou como conhecimentos de Química, Física e
            Biologia se integram na construção de soluções práticas, alinhando o
            aprendizado acadêmico às necessidades reais da sociedade e do meio
            ambiente.
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 mb-8 sm:mb-12">
          {keyPoints.map((point) => (
            <div
              key={point.text}
              className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-card border border-border"
            >
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                <point.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
          <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-2">
            Faça Parte da Mudança
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6 max-w-xl mx-auto">
            Comece hoje mesmo a planejar seu sistema de captação. Cada litro de
            água da chuva reaproveitado é um passo em direção a um futuro mais
            sustentável.
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="#sistema">Ver Sistema Completo</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
