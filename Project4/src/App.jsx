import Header from "./components/Header"
import Location from './components/Location';
import travelData from "./components/travelData";
function App() {

  return (
    <>
      <Header/>
      <main>
        {travelData.map((location, index) =>(<Location key={index} {...location}/>))}
      </main>
    </>
  )
}

export default App
