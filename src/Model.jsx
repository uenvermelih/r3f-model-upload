import { useGLTF, Clone } from '@react-three/drei'

export default function Model() {

    const model = useGLTF("./burger-draco.glb")

    return (
        <>
        <Clone object={model.scene} scale={0.35} position-x={ -4 }/>
        <Clone object={model.scene} scale={0.35} position-x={ 0 }/>
        <Clone object={model.scene} scale={0.35} position-x={ 4 }/>
        </>
    )
}

useGLTF.preload("./burger-draco.glb") //to preload model even if not called yet