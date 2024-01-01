import Camera from "./Camera";
import Mesh from "./Mesh";
import Scene from "./Scene";

interface Engine {
    createScene(): Scene;
    createCamera(): Camera;
    createMesh(): Mesh;
}

export default Engine;
