import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

function Car() {
    const mesh = useGLTF("/assets/car.glb").scene;

    const position = [-1.5, 0.5, 3];
    const width = 0.15;
    const height = 0.07;
    const front = 0.15;
    const wheelRadius = 0.05;

    const chassisBodyArgs = [width, height, front * 2];
    const [chassisBody, chassisApi] = useBox(() => ({
        mass: 150,
        args: [
            chassisBodyArgs[0],
            chassisBodyArgs[1],
            chassisBodyArgs[2],
        ],
        position: [position[0], position[1], position[2]],
    }), useRef(null));

    useEffect(() => {
        mesh.scale.set(0.0012, 0.0012, 0.0012);
        mesh.children[0].position.set(-365, -1, -67);
    }, [mesh]);

    return (
        <mesh ref={chassisBody as any}>
            <meshBasicMaterial transparent={true} opacity={0.3} />
            <boxGeometry args={[
                chassisBodyArgs[0],
                chassisBodyArgs[1],
                chassisBodyArgs[2],
            ]} />
        </mesh>
    )
}
export default Car;
