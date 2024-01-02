import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect } from "react";

export default function Track() {
    const obj = useGLTF('/assets/track.glb')

    const texture = useTexture(
        '/assets/track.png',
    );

    useEffect(() => {
        texture.anisotropy = 16;
    }, [texture])

    const geometry = (
        obj.scene.children[0] as THREE.Mesh
    ).geometry;


    return (
        <mesh>
            <primitive object={geometry} attach={"geometry"} />
            <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
    )
}