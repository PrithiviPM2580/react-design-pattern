import useToggle from "../useToggle";

const ToggleHook = () => {
  const [isToggled, toggle] = useToggle(false);

  return (
    <div className="toggle-card">
      <div className="toggle-header">
        <p className="eyebrow">Custom hook demo</p>
        <h2>useToggle</h2>
        <p className="subhead">Flip the switch to change the state</p>
      </div>

      <button
        className="toggle-switch"
        onClick={toggle}
        type="button"
        aria-pressed={isToggled}
        data-state={isToggled ? "on" : "off"}
      >
        <span className="pill" />
        <span className="label">{isToggled ? "On" : "Off"}</span>
      </button>

      <p className="hint">Tap to toggle; uses a tiny custom hook.</p>
    </div>
  );
};

export default ToggleHook;
