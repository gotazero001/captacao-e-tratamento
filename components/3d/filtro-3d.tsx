"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function FiltroModel() {
  return (
    <group position={[0, 0.2, 0]}>
      {/* Garrafa PET cortada - parte de cima funcionando como funil */}
      {/* Corpo da garrafa */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.4, 0.35, 1.6, 24]} />
        <meshStandardMaterial color="#94a3b8" transparent opacity={0.35} />
      </mesh>

      {/* Borda cortada da garrafa */}
      <mesh position={[0, 1.42, 0]}>
        <torusGeometry args={[0.4, 0.02, 8, 24]} />
        <meshStandardMaterial color="#64748b" />
      </mesh>

      {/* Gargalo da garrafa (virado para baixo) */}
      <mesh position={[0, -0.28, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.25, 16]} />
        <meshStandardMaterial color="#64748b" />
      </mesh>

      {/* Tampinha com furo */}
      <mesh position={[0, -0.42, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.05, 16]} />
        <meshStandardMaterial color="#22c55e" />
      </mesh>

      {/* === Camadas internas de baixo para cima === */}
      
      {/* Pedras - fundo */}
      <mesh position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.33, 0.32, 0.3, 24]} />
        <meshStandardMaterial color="#78716c" />
      </mesh>

      {/* Areia grossa */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.34, 0.33, 0.3, 24]} />
        <meshStandardMaterial color="#d97706" />
      </mesh>

      {/* Areia fina */}
      <mesh position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.36, 0.34, 0.3, 24]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>

      {/* Carvao ativado */}
      <mesh position={[0, 0.85, 0]}>
        <cylinderGeometry args={[0.37, 0.36, 0.3, 24]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>

      {/* Algodao/tecido - topo */}
      <mesh position={[0, 1.1, 0]}>
        <cylinderGeometry args={[0.38, 0.37, 0.2, 24]} />
        <meshStandardMaterial color="#f1f5f9" />
      </mesh>

      {/* === Suporte de madeira === */}
      
      {/* Travessa horizontal frontal */}
      <mesh position={[0, -0.1, 0.55]}>
        <boxGeometry args={[1.1, 0.08, 0.08]} />
        <meshStandardMaterial color="#92400e" />
      </mesh>

      {/* Travessa horizontal traseira */}
      <mesh position={[0, -0.1, -0.55]}>
        <boxGeometry args={[1.1, 0.08, 0.08]} />
        <meshStandardMaterial color="#92400e" />
      </mesh>

      {/* Perna esquerda frontal */}
      <mesh position={[-0.5, -0.75, 0.5]}>
        <boxGeometry args={[0.08, 1.2, 0.08]} />
        <meshStandardMaterial color="#92400e" />
      </mesh>

      {/* Perna direita frontal */}
      <mesh position={[0.5, -0.75, 0.5]}>
        <boxGeometry args={[0.08, 1.2, 0.08]} />
        <meshStandardMaterial color="#92400e" />
      </mesh>

      {/* Perna esquerda traseira */}
      <mesh position={[-0.5, -0.75, -0.5]}>
        <boxGeometry args={[0.08, 1.2, 0.08]} />
        <meshStandardMaterial color="#92400e" />
      </mesh>

      {/* Perna direita traseira */}
      <mesh position={[0.5, -0.75, -0.5]}>
        <boxGeometry args={[0.08, 1.2, 0.08]} />
        <meshStandardMaterial color="#92400e" />
      </mesh>

      {/* Travessas laterais */}
      <mesh position={[-0.5, -0.1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[1.02, 0.08, 0.08]} />
        <meshStandardMaterial color="#92400e" />
      </mesh>
      <mesh position={[0.5, -0.1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[1.02, 0.08, 0.08]} />
        <meshStandardMaterial color="#92400e" />
      </mesh>

      {/* Recipiente coletor - balde/pote */}
      <mesh position={[0, -1.15, 0]}>
        <cylinderGeometry args={[0.35, 0.3, 0.4, 24]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>

      {/* Borda do recipiente */}
      <mesh position={[0, -0.93, 0]}>
        <torusGeometry args={[0.35, 0.025, 8, 24]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>
    </group>
  )
}

const legendItems = [
  { color: "#64748b", label: "Garrafa PET" },
  { color: "#f1f5f9", label: "Algodao", border: true },
  { color: "#1e293b", label: "Carvao" },
  { color: "#fbbf24", label: "Areia Fina" },
  { color: "#d97706", label: "Areia Grossa" },
  { color: "#78716c", label: "Pedras" },
  { color: "#92400e", label: "Suporte" },
  { color: "#3b82f6", label: "Recipiente" },
]

export function Filtro3D() {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full h-[250px] sm:h-[280px] bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden touch-none">
        <Canvas 
          camera={{ position: [2, 1.5, 2.5], fov: 45 }}
          style={{ touchAction: "none" }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} />
          <FiltroModel />
          <OrbitControls 
            enableZoom={true} 
            enablePan={false}
            touches={{ ONE: 1, TWO: 2 }}
            minDistance={2}
            maxDistance={8}
          />
        </Canvas>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-2 text-xs">
        {legendItems.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <div 
              className={`w-3 h-3 rounded-sm flex-shrink-0 border ${item.border ? "border-slate-400" : "border-black/20"}`}
              style={{ backgroundColor: item.color }}
            />
            <span className="text-foreground">{item.label}</span>
          </div>
        ))}
      </div>
      
      <p className="text-xs text-muted-foreground text-center">
        Toque e arraste para rotacionar | Pinch para zoom
      </p>
    </div>
  )
}
