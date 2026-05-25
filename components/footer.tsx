import { Droplets, Github, Mail } from "lucide-react"

const authors = [
  { name: "Vitor Hugo Brusarosco" },
  { name: "Alan Ferreira da Silva" },
  { name: "Hugo Leonardo Kern Lima" },
]

export function Footer() {
  return (
    <footer id="creditos" className="py-10 sm:py-12 md:py-16 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-2">
          {/* Project Info */}
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Droplets className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground opacity-80" />
              <span className="font-serif text-lg sm:text-xl font-semibold">
                Água da Chuva
              </span>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-background/70 leading-relaxed max-w-md">
              Projeto educacional sobre captação e tratamento de água da chuva,
              desenvolvido como trabalho acadêmico interdisciplinar integrando
              conhecimentos de Química, Física e Biologia.
            </p>
          </div>

          {/* Credits */}
          <div>
            <h3 className="font-serif text-base sm:text-lg font-semibold mb-3 sm:mb-4">Créditos</h3>
            <div className="space-y-2 sm:space-y-3">
              {authors.map((author) => (
                <div
                  key={author.name}
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-background/5"
                >
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background/10 text-background flex-shrink-0">
                    <span className="text-xs sm:text-sm font-bold">
                      {author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm md:text-base text-background/90">{author.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-background/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-[10px] sm:text-xs md:text-sm text-background/50 text-center sm:text-left">
              © {new Date().getFullYear()} Projeto Educacional. Todos os
              direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#inicio"
                className="text-xs sm:text-sm text-background/70 hover:text-background transition-colors active:text-background/90"
              >
                Voltar ao Início
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
