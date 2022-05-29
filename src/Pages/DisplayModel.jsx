import { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, useGLTF, Sky } from '@react-three/drei'
import './index.css';
import Model from './Models/P1'

export default function DisplayModel() {
    return (
        <Canvas style={{ height: '100vh' }} camera={{ fov: 70, position: [0, 0, 15] }}>
            <Sky
                distance={450000}
                sunPosition={[5, 1, 8]}
                inclination={0}
                azimuth={0.25}
            />
            <Suspense fallback={null}>
                <ambientLight />
                <directionalLight intensity={2} position={[0, 0, 50]} />
                <Model />
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            </Suspense>
        </Canvas>
    )
}