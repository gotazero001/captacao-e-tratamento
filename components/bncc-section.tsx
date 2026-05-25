import { BookOpen, Lightbulb, Heart, Users } from "lucide-react"

const competencias = [
  {
    icon: Lightbulb,
    number: "02",
    title: "Pensamento Científico, Crítico e Criativo",
    description:
      "Exercitar a curiosidade intelectual e recorrer à abordagem própria das ciências para investigar causas, elaborar e testar hipóteses, formular e resolver problemas.",
    application:
      "O projeto utiliza o método científico para desenvolver soluções de captação e tratamento de água, testando a eficácia de diferentes materiais filtrantes.",
  },
  {
    icon: Heart,
    number: "08",
    title: "Autoconhecimento e Autocuidado",
    description:
      "Conhecer-se, apreciar-se e cuidar de sua saúde física e emocional, compreendendo-se na diversidade humana e reconhecendo suas emoções.",
    application:
      "O acesso à água limpa é fundamental para a saúde. O projeto promove o autocuidado através da conscientização sobre a qualidade da água consumida.",
  },
  {
    icon: Users,
    number: "10",
    title: "Responsabilidade e Cidadania",
    description:
      "Agir pessoal e coletivamente com autonomia, responsabilidade, flexibilidade, resiliência e determinação, tomando decisões com base em princípios éticos.",
    application:
      "A captação de água da chuva é um ato de cidadania ambiental, contribuindo para a preservação dos recursos hídricos e a sustentabilidade.",
  },
]

export function BnccSection() {
  return (
    <section id="bncc" className="py-12 sm:py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
            Base Nacional Comum
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance px-2">
            Competências BNCC
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-2">
            Como o projeto desenvolve competências essenciais definidas pela
            Base Nacional Comum Curricular.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {competencias.map((comp, index) => (
            <div
              key={comp.number}
              className={`flex flex-col lg:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border bg-background ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-shrink-0 flex items-start gap-3 sm:gap-4">
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary text-primary-foreground">
                  <comp.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="lg:hidden">
                  <span className="text-[10px] sm:text-xs text-muted-foreground font-medium">
                    Competência
                  </span>
                  <p className="text-2xl sm:text-3xl font-bold text-primary">{comp.number}</p>
                </div>
              </div>

              <div className="flex-1 space-y-3 sm:space-y-4">
                <div>
                  <div className="hidden lg:flex items-center gap-2 mb-1">
                    <span className="text-xs text-muted-foreground font-medium">
                      Competência
                    </span>
                    <span className="text-sm font-bold text-primary">
                      {comp.number}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-serif font-semibold text-foreground">
                    {comp.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  {comp.description}
                </p>

                <div className="p-3 sm:p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                    <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-foreground">
                      Aplicação no Projeto
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {comp.application}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
