"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function CisternaModel() {
  return (
    <group position={[0, -0.3, 0]}>
      {/* Telhado inclinado */}
      <mesh position={[-0.5, 1.8, 0]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[2, 0.08, 1.2]} />
        <meshStandardMaterial color="#64748b" />
      </mesh>

      {/* Calha - canaleta em U na borda do telhado */}
      <mesh position={[0.55, 1.5, 0]}>
        <boxGeometry args={[0.12, 0.15, 1.1]} />
        <meshStandardMaterial color="#f97316" />
      </mesh>

      {/* Cano vertical descendo da calha */}
      <mesh position={[0.55, 0.5, 0.45]}>
        <cylinderGeometry args={[0.05, 0.05, 2, 16]} />
        <meshStandardMaterial color="#f97316" />
      </mesh>

      {/* Joelho/cotovelo - conecta cano vertical ao horizontal */}
      <mesh position={[0.55, -0.55, 0.45]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshStandardMaterial color="#f97316" />
      </mesh>

      {/* Cano horizontal entrando na cisterna */}
      <mesh position={[0.1, -0.55, 0.45]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 0.8, 16]} />
        <meshStandardMaterial color="#f97316" />
      </mesh>

      {/* Cisterna - bombona/tambor */}
      <mesh position={[-0.6, -0.8, 0]}>
        <cylinderGeometry args={[0.6, 0.55, 1.4, 24]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>

      {/* Tampa da cisterna */}
      <mesh position={[-0.6, -0.05, 0]}>
        <cylinderGeometry args={[0.62, 0.62, 0.06, 24]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>

      {/* Registro - corpo cilindrico */}
      <mesh position={[-0.6, -1.35, 0.55]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.2, 16]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>

      {/* Registro - alavanca/manopla */}
      <mesh position={[-0.6, -1.28, 0.55]}>
        <boxGeometry args={[0.15, 0.03, 0.03]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>

      {/* Registro - saida da agua */}
      <mesh position={[-0.6, -1.35, 0.75]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.2, 12]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>

      {/* Base - blocos de concreto */}
      <mesh position={[-0.9, -1.6, 0]}>
        <boxGeometry args={[0.35, 0.2, 0.6]} />
        <meshStandardMaterial color="#78716c" />
      </mesh>
      <mesh position={[-0.3, -1.6, 0]}>
        <boxGeometry args={[0.35, 0.2, 0.6]} />
        <meshStandardMaterial color="#78716c" />
      </mesh>
    </group>
  )
}

const legendItems = [
  { color: "#64748b", label: "Telhado" },
  { color: "#f97316", label: "Calha e Canos" },
  { color: "#3b82f6", label: "Cisterna" },
  { color: "#1e40af", label: "Tampa" },
  { color: "#ef4444", label: "Registro" },
  { color: "#78716c", label: "Base" },
]

export function Cisterna3D() {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full h-[250px] sm:h-[280px] bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden touch-none">
        <Canvas 
          camera={{ position: [3, 2, 3], fov: 45 }}
          style={{ touchAction: "none" }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} />
          <CisternaModel />
          <OrbitControls 
            enableZoom={true} 
            enablePan={false}
            touches={{ ONE: 1, TWO: 2 }}
            minDistance={2}
            maxDistance={8}
          />
        </Canvas>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-2 text-xs">
        {legendItems.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <div 
              className="w-3 h-3 rounded-sm flex-shrink-0 border border-black/20" 
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
