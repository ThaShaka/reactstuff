import {useEffect, useRef, useState} from "react";
import Die from "./components/Die.jsx";
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'
import { MdLeaderboard } from "react-icons/md";
function App() {
    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)
    const [count, setCount] = useState(0)
    const [timer, setTimer] = useState({
        value: 0,
        isRunning: false,
    })
    const intervalRef = useRef(0);
    function startTimer() {
        useEffect(() => {
            setTimer(prevState => ({
                value: prevState.value,
                isRunning: true
            }));

            const interval = setInterval(() => {
                setTimer(prevState => ({
                    value: prevState.value + 1,
                    isRunning: prevState.isRunning
                }));
            }, 1000);

            return () => {
                clearInterval(interval);
                setTimer(prevState => ({
                    value: prevState.value,
                    isRunning: false
                }));
            };
        }, []);
    }



    useEffect(() => {
       const allHeld = dice.every(die=> die.isHeld);
       const firstValue = dice[0].value;
       const allSameValue = dice.every(die=>die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(prevState => !prevState)
            document.querySelector(".currentGame").showModal();
        }
        }, [dice])
    function generateNewDie() {
        return {
            value: 2,
            isHeld: false,
            id: nanoid()
        }
    }
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }

    function rollDice() {
        if(tenzies) {
            setTenzies(prevState => !prevState)
            setCount(0)
            setDice(allNewDice)
        }
        else {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ?
                die :
                generateNewDie()
        }))}

    }
    const diceElements = dice.map(die => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
        />
    ))

    function holdDice(id) {
       setDice(prevDice=> prevDice.map(dice=> {
           return dice.id === id ? {...dice, isHeld: !dice.isHeld} :
               dice
       }))
    }

    return (<main>
        <button className="openModal" ><MdLeaderboard /></button>
        {tenzies && <Confetti width={600}/>}
        <section className="info">
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same. Click each die to freeze it as its current value between rolls</p>
            {timer}
        </section>
        <section className="dices">
            {diceElements}
        </section>
        <section className="button">
            <button onClick={() => {
                rollDice();
                setCount(prevState => ++prevState);

            }}>{tenzies ? "New game" : "Roll"}</button>
            <button onClick={startTimer}>Start</button>
            <button >Start</button>
        </section>
        <dialog className="leaderboard modal">
        <h1>GGWP</h1>
            <p>{count}</p>
            <button  className="closeModal" onClick={() => document.querySelector(".leaderboard").close()}>Close</button>
        </dialog>
        <dialog className="currentGame modal">
            <h2>Stats</h2>
            <p>Number of rerolls : {count} </p>
            <p>Time passed : {timer.value} seconds</p>
            <button onClick={()=> {
                document.querySelector(".currentGame").close();
            }}>Close</button>
        </dialog>

    </main>)
}


export default App
