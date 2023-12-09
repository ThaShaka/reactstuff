import Joke from "./Joke"

function App() {
    const jokes = [
      {
        setup : "What did the cat say when he lost all his money?",
        punchline : "I’m paw!"
      },
      {
        setup : "Why are cats better than babies",
        punchline : "Because you only have to change a litter box once a day."
      },
      {
        setup : "What did the alien say to the cat?",
        punchline : "“Take me to your litter.”"
      },
      {
        setup : "Why don’t cats play poker in the jungle?",
        punchline : "Too many cheetahs."
      },
      {
        setup : "What is a cat’s way of keeping law and order? ",
        punchline : "Claw Enforcement."
      },
    ]

    const Stuff = () => {jokes.map(() => {return <Joke setup={jokes.setup} punchline={jokes.punchline} />})}   

    return (<section className="jokes">
      {jokes.map((joke,index) => (
        <Joke setup={joke.setup} punchline={joke.punchline} id={index} />
      ))}
    </section>)
    
}

export default App
