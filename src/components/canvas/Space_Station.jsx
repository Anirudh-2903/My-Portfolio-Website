import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls , Preload , useGLTF} from '@react-three/drei';
import CanvasLoader from '../Loader';

const SS = () => {

  const ss = useGLTF('./space_station/scene.gltf')

  return (
    <mesh>
      <primitive object={ss.scene}
      scale={1.0}
      position={[0,1,0]}/>
      <hemisphereLight object={ss.scene} intensity={1000} />
    </mesh>
  )
}

const SSCanvas = () => {
  return (
    <Canvas
      frameLoop = "demand"
      shadows
      camera={{position : [20,30,5] , fov:25}}
      gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls enableZoom={false} autoRotate maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} />
        <SS />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default SSCanvas;