import img from "./pexels-mali-maeder-142497.jpg"
import {useEffect, useState} from "react";
function App() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let id = setInterval(()=>{
            setCount(prevState => {
                if( prevState<100) return prevState + 1;
                else clearInterval(id)
            })
        }, 100)

        return () => clearInterval(id)
    }, []);

    return <main>
        <img src={img} alt=""/>
        <div className="counter">
            {count}
        </div>
    </main>

}

export default App
