import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import {useState} from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false)

    function toggleDarkMode() {

        setDarkMode(prevMode => !prevMode)
    }
    return <div className="container">
            <Navbar mode={darkMode}  toggle={toggleDarkMode}/>
            <Main  mode={darkMode} />
        </div>
}

export default App
