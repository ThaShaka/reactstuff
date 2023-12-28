import {useState} from "react";
import Step from "./Step.jsx";

function App() {
    const [steps, setStep] = useState(0)
    const [state, setState] = useState([true])
    let styles = {
        width:  `${steps*33}%`,
    }
    function increaseStep(){
        setStep(prevState => prevState + 1)
        setState(prevState => [...prevState, true])
    }
    function decreaseStep() {
        setStep(prevState => prevState - 1)
        setState(prevState => prevState.slice(0, -1))
    }
        return <main>
        <div className="progress-container">
            <div className="progress" style={styles} ></div>
            {[1,2,3,4].map((step,index)=> {return <Step key={index} value={step} isActive={state[index]}/>})}
        </div>
        <section className="button">
            <button className={"btn"} disabled={steps<1} onClick={decreaseStep}>Prev</button>
            <button className="btn next" onClick={increaseStep} disabled={steps>2}>Next</button>
        </section>
    </main>

}

export default App

