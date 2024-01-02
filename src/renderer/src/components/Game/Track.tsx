import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect } from "react";

const getGeometry = (obj: THREE.Object3D) => {
    return (obj.children[0] as THREE.Mesh).geometry;
}

export default function Track() {
    const obj = useGLTF('/assets/track.glb')

    const texture = useTexture(
        '/assets/track.png',
    );

    useEffect(() => {
        texture.anisotropy = 16;
    }, [texture])

    return (
        <mesh>
            <primitive object={getGeometry(obj.scene)} attach={"geometry"} />
            <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
    )
}