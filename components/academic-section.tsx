import { FlaskConical, Atom, Bug } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const subjects = [
  {
    icon: FlaskConical,
    subject: "Química",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    topics: [
      {
        title: "Separação de Misturas",
        description:
          "O filtro de carvão e areia demonstra métodos de separação como filtração simples e adsorção.",
      },
      {
        title: "Reações Químicas",
        description:
          "O carvão ativado realiza adsorção de moléculas, um processo físico-químico de superfície.",
      },
      {
        title: "pH e Indicadores",
        description:
          "Análise da acidez/alcalinidade da água usando a escala de pH e indicadores colorimétricos.",
      },
    ],
  },
  {
    icon: Atom,
    subject: "Física",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    topics: [
      {
        title: "Pressão Hidrostática",
        description:
          "A pressão da água na cisterna varia com a profundidade (P = ρgh), afetando o fluxo.",
      },
      {
        title: "Mecânica dos Fluidos",
        description:
          "Princípios de vazão, velocidade do fluxo e equação da continuidade nos condutores.",
      },
      {
        title: "Energia Potencial",
        description:
          "Aproveitamento da gravidade para movimentação da água sem necessidade de bombas.",
      },
    ],
  },
  {
    icon: Bug,
    subject: "Biologia",
    color: "text-green-600",
    bgColor: "bg-green-100",
    topics: [
      {
        title: "Doenças Veiculadas pela Água",
        description:
          "Prevenção de doenças como leptospirose, dengue e diarreias através do tratamento adequado.",
      },
      {
        title: "Ciclo Hidrológico",
        description:
          "Compreensão do ciclo da água e como a captação de chuva se integra nele.",
      },
      {
        title: "Saúde Pública",
        description:
          "Importância do acesso à água limpa para a saúde individual e coletiva.",
      },
    ],
  },
]

export function AcademicSection() {
  return (
    <section id="academico" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Interdisciplinaridade
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance px-2">
            Conexões Acadêmicas
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-2">
            Veja como o projeto integra conhecimentos de diferentes disciplinas
            em aplicações práticas do cotidiano.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <Card key={subject.subject} className="overflow-hidden">
              <CardHeader className="p-4 sm:p-6 pb-3 sm:pb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${subject.bgColor} flex-shrink-0`}
                  >
                    <subject.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${subject.color}`} />
                  </div>
                  <div className="min-w-0">
                    <CardTitle className="text-lg sm:text-xl">{subject.subject}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      Aplicações no projeto
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
                {subject.topics.map((topic, index) => (
                  <div
                    key={topic.title}
                    className={`${
                      index !== subject.topics.length - 1
                        ? "pb-3 sm:pb-4 border-b border-border"
                        : ""
                    }`}
                  >
                    <h4 className="font-semibold text-xs sm:text-sm text-foreground mb-1">
                      {topic.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
