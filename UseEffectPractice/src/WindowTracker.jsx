import {useEffect, useState} from "react";

function WindowTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        function checkWidth() {
            console.log("Setup")
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", checkWidth)

        return ()=> {
            console.log("Cleanup")
            window.removeEventListener("resize", checkWidth)
        }
    }, []);
    return (
        <h1>Window width: {windowWidth}</h1>
    );
}

export default WindowTracker;