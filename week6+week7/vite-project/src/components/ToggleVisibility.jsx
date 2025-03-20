function toggleVisibility() {
    const [isVisible, setIsVisible] = useState(true);
    const toggle = () => setIsVisible(!isVisible);

    return (
        <div className="toggle-visibility">
            {isVisible && <p>This is a hidden message!</p>}
            <button onClick={() => toggle()}>Reveal</button>
        </div>
    );
}

export default toggleVisibility;