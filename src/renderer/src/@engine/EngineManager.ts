import BabylonEngine from "./engines/BabylonEngine";
import Engine from "./interfaces/Engine";

export enum EnginesSupported {
    BABYLON = "BABYLON"
}

class EngineManager {
    private engine!: Engine;
    constructor(
        private readonly engineType: EnginesSupported
    ) {
        this.createEngine();
    }
    public getEngine = (): Engine => {
        return this.engine;
    }
    private createEngine = (): void => {
        switch (this.engineType) {
            case EnginesSupported.BABYLON:
                this.engine = new BabylonEngine();
                break;
            default:
                throw new Error(`Engine ${this.engineType} not supported`);
        }
    }
}
export default EngineManager;