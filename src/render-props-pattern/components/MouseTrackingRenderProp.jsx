import { useState } from "react";

const MouseTrackingRenderProp = ({ render }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handdleTracking = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };
  return (
    <div onMouseMove={handdleTracking} className="mouse-tracking-render-prop">
      <div className="render-prop">{render(pos)}</div>
    </div>
  );
};

export default MouseTrackingRenderProp;
