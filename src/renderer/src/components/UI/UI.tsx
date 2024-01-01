import UICameraControls from "./CameraControls";

namespace UI {
    export const CameraControls = UICameraControls;
    export const Layer = ({
        children
    }: {
        children: JSX.Element | JSX.Element[];
    }) => {
        return (
            <div className="layer" style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
            }}>
                {children}
            </div>
        )
    }
}
export default UI;
