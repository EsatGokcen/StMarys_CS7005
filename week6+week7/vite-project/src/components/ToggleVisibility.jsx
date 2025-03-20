import { useState } from "react";

function ToggleVisibility() {
    const [isVisible, setIsVisible] = useState(true);

    const toggle = () => setIsVisible(!isVisible);

    return (
        <div className="toggle-visibility">
            <p className={`hidden-message ${isVisible ? "visible" : ""}`}>
                This is a hidden message!
            </p>
            <button className="counter-button" onClick={toggle}>
                {isVisible ? "Hide" : "Reveal"}
            </button>
        </div>
    );
}

export default ToggleVisibility;