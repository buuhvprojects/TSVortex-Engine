import UI from "@renderer/components/UI/UI"
import SceneProvider from "@renderer/states/Context"
import Scene from "../components/Game/Scene"

function App(): JSX.Element {
    return (
        <SceneProvider>
            <Scene />
            <UI.Layer>
                <UI.CameraControls />
            </UI.Layer>
        </SceneProvider>
    )
}

export default App
