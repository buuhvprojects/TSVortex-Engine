import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Track from "@renderer/components/Game/Track";
import { Suspense } from "react";
import Ground from "./Ground";
import Car from "./Car";
import { Physics } from "@react-three/cannon";

function Scene(): JSX.Element {
    return (
        <Canvas style={styles}>
            <Suspense fallback={null}>
                <Environment
                    files={'/assets/envmap.hdr'}
                    background='only'
                />
                <Physics
                    broadphase="SAP"
                    gravity={[0, -9.36, 0]}
                >
                    <ambientLight intensity={1} />
                    <pointLight position={[0, 5, 0]} intensity={20} />


                    <Car />

                    <Track />
                    <Ground />

                    <PerspectiveCamera
                        makeDefault
                        position={[-6, 3.9, 6.21]}
                        fov={40}
                    />
                    <OrbitControls
                        target={[-2.64, -0.71, 0.03]}
                    />
                </Physics>

            </Suspense>
        </Canvas>
    )
}

export default Scene;

const styles: React.CSSProperties | undefined = {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
};
