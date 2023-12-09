import profilePic from "./../public/profpic.jpg"
import CardInfo from "./components/CardInfo"
import Social from "./components/Social"

function App() {

  return (
    <section className="card">
      <img src={profilePic} alt="" />
      <CardInfo />
      <Social />
    </section>
  )
}

export default App
