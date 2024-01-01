import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Ground from '@renderer/components/Game/Ground';
import React from 'react';

function App(): JSX.Element {
    return (
        <React.Fragment>
            <Canvas style={{
                height: '100vh',
                width: '100vw',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: -1,
            }}
            >
                <Sky
                    sunPosition={[100, 100, 20]}
                />
                <ambientLight intensity={1} />
                <Physics>
                    <Ground />
                </Physics>
            </Canvas>
        </React.Fragment>
    )
}

export default App
