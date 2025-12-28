import MouseTrackingRenderProp from "./MouseTrackingRenderProp";
import "../index.css";

const RenderProp = () => {
  return (
    <div className="container">
      <MouseTrackingRenderProp
        render={({ x, y }) => (
          <p>
            Bike is at ({x}, {y})
          </p>
        )}
      />
      <MouseTrackingRenderProp
        render={({ x, y }) => (
          <p>
            Car is at ({x}, {y})
          </p>
        )}
      />
    </div>
  );
};

export default RenderProp;
