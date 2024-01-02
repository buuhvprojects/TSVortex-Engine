import { Environment, OrbitControls, PerspectiveCamera, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Track from "@renderer/components/Game/Track";
import { Suspense } from "react";

function CanvasRender(): JSX.Element {
    return (
        <Canvas style={styles}>
            <Suspense fallback={null}>
                <Sky sunPosition={[100, 10, 100]} />

                <ambientLight intensity={1} position={[0, 0, 0]} />
                <directionalLight intensity={2} position={[0, 100, 10]} />

                <Track />

                <PerspectiveCamera
                    makeDefault
                    position={[-6, 3.9, 6.21]}
                    fov={40}
                />
                <OrbitControls
                    target={[-2.64, -0.71, 0.03]}
                />
            </Suspense>
        </Canvas>
    )
}

export default CanvasRender;

const styles: React.CSSProperties | undefined = {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
};
