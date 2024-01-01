import { useScene } from "@renderer/states/Context";
import { useEffect, useState } from "react";

function CameraControls() {
    const [rotationX, setRotationX] = useState(0);
    const [rotationY, setRotationY] = useState(0);
    const [zoom, setZoom] = useState(1);
    
    const scene = useScene();

    const handleRotationX = (event) => {
        setRotationX(event.target.value);
    };

    const handleRotationY = (event) => {
        setRotationY(event.target.value);
    };

    const handleZoom = (event) => {
        setZoom(event.target.value);
    };

    useEffect(() => {
        if (scene.camera) {
            scene.camera.rotation.x = rotationX * Math.PI / 180;
            scene.camera.rotation.y = rotationY * Math.PI / 180;
            scene.camera.zoom = zoom;
            scene.camera.updateProjectionMatrix();
        }
    }, [rotationX, rotationY, zoom, scene.camera]);

    return (
        <div className="camera-controls">
            <h2>Visualização da Câmera</h2>
            <input
                type="range"
                min="-90"
                max="90"
                value={rotationX}
                onChange={handleRotationX}
            />
            <label>Rotação X</label>
            <input
                type="range"
                min="-90"
                max="90"
                value={rotationY}
                onChange={handleRotationY}
            />
            <label>Rotação Y</label>
            <input
                type="range"
                min="0.1"
                max="10"
                value={zoom}
                onChange={handleZoom}
            />
            <label>Zoom</label>
        </div>
    );
}
export default CameraControls;
