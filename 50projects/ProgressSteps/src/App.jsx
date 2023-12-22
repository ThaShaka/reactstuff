
function App() {
    return <main>
        <div className="progress-container">
            <div className="progress"></div>
            {[1,2,3,4].map((value,index)=> {return <div key={index}>{value}</div>})}
        </div>
        <section className="button">
            <button className={"btn"}>Prev</button>
            <button className="btn">Next</button>
        </section>
    </main>


}

export default App

