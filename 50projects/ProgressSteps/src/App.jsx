import {useState} from "react";
import Step from "./Step.jsx";

function App() {
    const [step, setStep] = useState([{
        step:1,
        isActive: true
    },
        {
            step:2,
            isActive: true,
        },
        {
            step: 3,
            isActive: false
        },
        {
            step: 4,
            isActive: false
        }
    ])
    function increaseStep() {
        setStep(prevState => prevState + 1)
        console.log(step)
    }
    function decreaseStep() {
        setStep(prevState =>  prevState - 1)
        console.log(step)
    }
    return <main>
        <div className="progress-container">
            <div className="progress"></div>
            {step.map((step,index)=> {return <Step key={index} value={step.step} isActive={step.isActive}/>})}
        </div>
        <section className="button">
            <button className={"btn"} disabled={step<=1} onClick={decreaseStep}>Prev</button>
            <button className="btn next" onClick={increaseStep} disabled={step>4}>Next</button>
        </section>
    </main>


}

export default App

