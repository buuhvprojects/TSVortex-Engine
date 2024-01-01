import UI from "@renderer/components/UI/UI"
import SceneProvider from "@renderer/states/Context"
import CanvasRender from "./CanvasRender"

function App(): JSX.Element {
    return (
        <SceneProvider>
            <CanvasRender />
            <UI.Layer>
                <UI.CameraControls />
            </UI.Layer>
        </SceneProvider>
    )
}

export default App
