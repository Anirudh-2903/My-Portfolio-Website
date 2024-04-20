import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls , Preload , useGLTF} from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {

  const earth = useGLTF('./earthquake/scene.gltf')


  return (
    <mesh>
      <primitive object={earth.scene}
      scale={0.1}
      position={[0,-3,0]}/>
    </mesh>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      frameLoop = "demand"
      shadows
      camera={{position : [20,30,5] , fov:25}}
      gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls enableZoom={false} autoRotate minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2} />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default EarthCanvas;