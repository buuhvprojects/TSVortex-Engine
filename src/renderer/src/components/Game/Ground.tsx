import { usePlane } from "@react-three/cannon";
import Textures from '@renderer/assets/textures';

function Ground() {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0], position: [0, -0.5, 0]
    }))
    Textures.ground.repeat.set(100, 100);
    return (
        <mesh
            ref={ref as any}
        >
            <planeGeometry attach='geometry' args={[100, 100]} />
            <meshStandardMaterial attach='material' map={Textures.ground} />
        </mesh>
    )
}
export default Ground;
