import WindowTracker from "./WindowTracker"
import {useState} from "react";

export default function App() {
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */

    const [show, isShown] = useState(true)
    function handleClick() {
        isShown(prevState => !prevState)
    }

    return (
        <div className="container">
            <button onClick={handleClick}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker/>}
        </div>
    )
}
