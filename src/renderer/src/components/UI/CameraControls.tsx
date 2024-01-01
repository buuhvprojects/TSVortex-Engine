import { useScene } from "@renderer/states/Context";
import React, { useEffect, useState } from "react";

function CameraControls() {
    const [rotationX, setRotationX] = useState(0);
    const [rotationY, setRotationY] = useState(0);
    const [positionY, setPositionY] = useState(0);
    const [positionZ, setPositionZ] = useState(5);
    const [positionX, setPositionX] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [isControlsVisible, setIsControlsVisible] = useState(false);

    const scene = useScene();

    const handleRotationX = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRotationX(parseInt(event.target.value));
    };

    const handleRotationY = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRotationY(parseInt(event.target.value));
    };

    const handleZoom = (event: React.ChangeEvent<HTMLInputElement>) => {
        setZoom(parseInt(event.target.value));
    };
    const onChangePositionY = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPositionY(parseInt(event.target.value));
    }
    const onChangePositionZ = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPositionZ(parseInt(event.target.value));
    }
    const onChangePositionX = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPositionX(parseInt(event.target.value));
    }

    useEffect(() => {
        if (scene.camera) {
            scene.camera.rotation.x = rotationX * Math.PI / 180;
            scene.camera.rotation.y = rotationY * Math.PI / 180;
            scene.camera.zoom = zoom;
            scene.camera.position.setY(positionY);
            scene.camera.position.setZ(positionZ);
            scene.camera.position.setX(positionX);

            scene.camera.updateProjectionMatrix();
        }
    }, [rotationX, rotationY, zoom, scene.camera, positionY, positionZ, positionX]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="camera-controls pt-2">
                        <div className="show-camera d-flex w-100">
                            <div className="mr-2" style={{
                                width: '150px',
                                fontWeight: 'bold',
                                fontSize: '18px',
                                }}>
                                Camera Controls
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => setIsControlsVisible(!isControlsVisible)}
                            >
                                {!isControlsVisible ? "Show" : "Hide"}
                            </button>
                        </div>
                        {isControlsVisible && (
                            <React.Fragment>
                                <hr />
                                <label className="form-label">Rotação X</label>
                                <input
                                    type="range"
                                    min="-90"
                                    max="90"
                                    value={rotationX}
                                    onChange={handleRotationX}
                                    className="form-range mb-3"
                                />
                                <label className="form-label">Rotação Y</label>
                                <input
                                    type="range"
                                    min="-90"
                                    max="90"
                                    value={rotationY}
                                    onChange={handleRotationY}
                                    className="form-range mb-3"
                                />
                                <label className="form-label">Zoom</label>
                                <input
                                    type="range"
                                    min="0.1"
                                    max="10"
                                    value={zoom}
                                    onChange={handleZoom}
                                    className="form-range mb-3"
                                />
                                <label className="form-label">Posição Y</label>
                                <input
                                    type="range"
                                    min="-10"
                                    max="10"
                                    value={positionY}
                                    onChange={onChangePositionY}
                                    className="form-range mb-3"
                                />
                                <label className="form-label">Posição Z</label>
                                <input
                                    type="range"
                                    min="-10"
                                    max="10"
                                    value={positionZ}
                                    onChange={onChangePositionZ}
                                    className="form-range mb-3"
                                />
                                <label className="form-label">Posição X</label>
                                <input
                                    type="range"
                                    min="-10"
                                    max="10"
                                    value={positionX}
                                    onChange={onChangePositionX}
                                    className="form-range mb-3"
                                />
                            </React.Fragment>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CameraControls;
