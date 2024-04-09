import {Suspense , useEffect , useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls , Preload , useGLTF} from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = () => {

  const computer = useGLTF('./a_windy_day/scene.gltf')

  return (
    <mesh>
      <primitive object={computer.scene}
      scale={5}
      position={[0,-2.25,0]}/>
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameLoop = "demand"
      shadows
      camera={{position : [20,30,5] , fov:25}}
      gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;