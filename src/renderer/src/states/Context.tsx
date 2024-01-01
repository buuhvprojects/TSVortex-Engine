import { Camera } from "@react-three/fiber";
import { createContext, useContext, useState } from "react";
import { Scene } from "three";

const initialScene = new Scene();

export const SceneContext = createContext<{
    scene: Scene,
    setScene: (scene: Scene) => void,
    camera: Camera | undefined,
    setCamera: (camera: Camera) => void,
}>({
    scene: initialScene,
    setScene: (_scene: Scene) => null,
    camera: undefined,
    setCamera: (_camera: Camera) => null,
});

function SceneProvider({ children }) {
    const [scene, setScene] = useState<Scene>(initialScene);
    const [camera, setCamera] = useState<Camera>();

    return (
        <SceneContext.Provider value={{
            scene,
            setScene,
            camera,
            setCamera,
        }}>
            {children}
        </SceneContext.Provider>
    );
}
export default SceneProvider;

export function useScene() {
    const context = useContext(SceneContext);
    if (context === undefined) {
        throw new Error('useScene must be used within a SceneProvider');
    }
    return context;
}
