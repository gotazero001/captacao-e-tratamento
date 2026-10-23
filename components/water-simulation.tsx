"use client"

import { useEffect, useState } from "react"
import { ChevronDown, CloudRain, Droplets, Filter, Info, RotateCcw, ShieldCheck, Waves } from "lucide-react"

const stages = [
  {
    id: "chuva",
    number: "01",
    title: "Chuva no telhado",
    short: "A água começa sua jornada",
    description: "A cobertura direciona a água da chuva para as calhas. Mantenha o telhado limpo para evitar folhas e resíduos no sistema.",
    icon: CloudRain,
    accent: "#5aa7c7",
  },
  {
    id: "calha",
    number: "02",
    title: "Calhas e condutores",
    short: "A água é guiada",
    description: "As calhas coletam a água e os condutores verticais levam o fluxo até o descarte inicial, sem desperdício de espaço.",
    icon: Waves,
    accent: "#4f8bd6",
  },
  {
    id: "descarte",
    number: "03",
    title: "Descarte inicial",
    short: "A primeira água é separada",
    description: "Os primeiros litros carregam a sujeira acumulada no telhado. Essa etapa desvia o fluxo inicial antes da filtragem.",
    icon: ShieldCheck,
    accent: "#d78c57",
  },
  {
    id: "filtro",
    number: "04",
    title: "Filtro caseiro",
    short: "Impurezas ficam retidas",
    description: "Camadas de tela, brita, areia e carvão ajudam a reter partículas. A água filtrada ainda deve receber desinfecção adequada.",
    icon: Filter,
    accent: "#8c78ce",
  },
  {
    id: "cisterna",
    number: "05",
    title: "Cisterna",
    short: "A água é armazenada",
    description: "A cisterna guarda a água protegida da luz e de contaminantes. Use essa água para fins não potáveis, como limpeza e irrigação.",
    icon: Droplets,
    accent: "#4f9b9b",
  },
]

export function WaterSimulation() {
  const [activeStage, setActiveStage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    const timer = window.setInterval(() => setActiveStage((current) => (current + 1) % stages.length), 3200)
    return () => window.clearInterval(timer)
  }, [isPlaying])

  const stage = stages[activeStage]

  return (
    <section id="simulacao" className="simulation-section" aria-labelledby="simulation-title">
      <div className="simulation-intro">
        <p className="eyebrow">Experiência interativa</p>
        <h2 id="simulation-title">A água em movimento</h2>
        <p className="simulation-lead">Acompanhe cada etapa da captação. Clique nos pontos do sistema para descobrir como a chuva se transforma em uma reserva útil.</p>
      </div>

      <div className="simulation-shell">
        <div className="simulation-scene" style={{ "--active-accent": stage.accent } as React.CSSProperties}>
          <div className="scene-sky" aria-hidden="true"><span className="orb orb-one" /><span className="orb orb-two" /><span className="cloud-shape cloud-left" /><span className="cloud-shape cloud-right" /></div>
          <div className="rain-field" aria-hidden="true">{Array.from({ length: 20 }, (_, index) => <i key={index} style={{ "--delay": `${(index % 7) * 0.34}s`, "--left": `${4 + (index * 17) % 93}%` } as React.CSSProperties} />)}</div>
          <div className="roof"><span className="roof-tile" /><span className="roof-tile" /><span className="roof-tile" /><span className="roof-tile" /></div>
          <div className="gutter"><span /></div>
          <div className="downpipe"><span className="water-stream" /></div>
          <div className="first-flush"><span className="flush-cap" /><span className="flush-water" /></div>
          <div className="filter-box"><span className="filter-layer layer-top" /><span className="filter-layer layer-middle" /><span className="filter-layer layer-bottom" /></div>
          <div className="tank"><div className="tank-water" /><div className="tank-highlight" /><span className="tank-label">RESERVA</span></div>
          <div className="flow-line flow-one" /><div className="flow-line flow-two" /><div className="flow-line flow-three" />
          <div className="scene-points">
            {stages.map((item, index) => {
              const Icon = item.icon
              return <button key={item.id} className={`scene-point point-${index + 1} ${activeStage === index ? "is-active" : ""}`} onClick={() => { setActiveStage(index); setIsPlaying(false) }} aria-label={`Ver etapa ${item.title}`} aria-pressed={activeStage === index}><span className="point-number">{item.number}</span><Icon aria-hidden="true" /></button>
            })}
          </div>
          <div className="scene-caption"><span>ETAPA {stage.number}</span><strong>{stage.short}</strong></div>
        </div>

        <div className="simulation-info">
          <div className="info-topline"><span>Como funciona</span><span className="live-dot">● animação ativa</span></div>
          <div className="info-heading"><span className="info-index">{stage.number}</span><div><p className="info-kicker">Etapa do sistema</p><h3>{stage.title}</h3></div></div>
          <p className="info-description">{stage.description}</p>
          <div className="stage-progress" aria-label={`Etapa ${activeStage + 1} de ${stages.length}`}>{stages.map((item, index) => <button key={item.id} onClick={() => { setActiveStage(index); setIsPlaying(false) }} className={activeStage === index ? "is-current" : ""} aria-label={`Selecionar ${item.title}`}><span /></button>)}</div>
          <div className="info-actions"><button className="simulation-control" onClick={() => setIsPlaying((current) => !current)}>{isPlaying ? "Pausar percurso" : "Continuar percurso"}</button><button className="reset-control" onClick={() => { setActiveStage(0); setIsPlaying(true) }} aria-label="Reiniciar simulação"><RotateCcw aria-hidden="true" /></button></div>
        </div>
      </div>
      <p className="simulation-note"><Info aria-hidden="true" /> Esta simulação é educativa. A água captada precisa de tratamento adequado para cada finalidade de uso.</p>
      <ChevronDown className="simulation-scroll" aria-hidden="true" />
    </section>
  )
}
