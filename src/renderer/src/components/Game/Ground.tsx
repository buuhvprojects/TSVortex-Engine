import { MeshReflectorMaterial, useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { BufferAttribute, BufferGeometry, Mesh, NormalBufferAttributes } from "three";

function Ground() {
    const gridMap = useTexture("/assets/grid.png");

    const aoMap = useTexture("/assets/ground-ao.png");

    const alphaMap = useTexture("/assets/alpha-map.png");

    const meshRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>>>(null);
    const meshRef2 = useRef<Mesh<BufferGeometry<NormalBufferAttributes>>>(null);

    useEffect(() => {
        gridMap.anisotropy = 16;
    }, [gridMap]);

    useEffect(() => {
        if (!meshRef.current) return;

        const uvs = meshRef.current.geometry.attributes.uv.array;
        meshRef.current.geometry.setAttribute("uv2", new BufferAttribute(uvs, 2));
    }, [meshRef.current]);

    useEffect(() => {
        if (!meshRef2.current) return;

        const uvs = meshRef2.current.geometry.attributes.uv.array;
        meshRef2.current.geometry.setAttribute("uv2", new BufferAttribute(uvs, 2));
    }, [meshRef2.current]);

    return (
        <group>
            <mesh
                ref={meshRef2}
                position={[-2.285, -0.01, -1.325]}
                rotation={[-Math.PI * 0.5, 0, 0]}
            >
                <planeGeometry args={[12, 21]} />
                <meshBasicMaterial
                    opacity={0.325}
                    alphaMap={gridMap}
                    transparent
                    color='white'
                />
            </mesh>
            <mesh
                ref={meshRef}
                position={[-2.285, -0.015, -1.325]}
                rotation={[-Math.PI * 0.5, 0, -0.079]}
            >
                <circleGeometry args={[6.12, 50]} />
                <MeshReflectorMaterial
                    alphaMap={alphaMap}
                    aoMap={aoMap}
                    transparent
                    color={[0.5, 0.5, 0.5]}
                    metalness={0.5}
                    roughness={0.4}

                    dithering={true}
                    blur={[1024, 1024]}
                    mixBlur={3}
                    mixStrength={30}
                    mixContrast={1}
                    resolution={1024}
                    depthScale={0}
                    minDepthThreshold={0.9}
                    maxDepthThreshold={1}
                    depthToBlurRatioBias={0.25}
                    reflectorOffset={0.02}
                    mirror={0}
                />
            </mesh>
        </group>
    )
}
export default Ground;