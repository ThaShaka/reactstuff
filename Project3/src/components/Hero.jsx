import imggroup from "./../../public/groupimg.png"

const Hero = () => {
    return <section className="hero">
        <img src={imggroup} className="heroImg" />
        <div className="heroText">
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    </section>
}   

export default Hero