import Mesh from "./Mesh";

interface Scene {
    addMesh(mesh: Mesh): void;
    render(): void;
}

export default Scene;
