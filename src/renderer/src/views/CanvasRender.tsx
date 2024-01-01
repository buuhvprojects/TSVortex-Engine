import { Sky } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useScene } from "@renderer/states/Context"

function CanvasRender(): JSX.Element {
    const scene = useScene();

    return (
        <Canvas style={styles} onCreated={(state) => {
            scene.setCamera(state.camera);
        }}>
            <Sky sunPosition={[100, 100, 20]} />
            <ambientLight intensity={1} />
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
