import { IoMdPin } from "react-icons/io";

const Location = (props) => {
    return <section className="location">
        <img src={`./../public/${props.img}`}  />
        <article className="info">
            <h3><IoMdPin color={"#F55A5A"}/>{props.country} <a href="">View on Google Maps</a></h3>
            <h1>{props.location}</h1>
            <h2>{props.date}</h2>
            <p>{props.desc}</p>
        </article>
    </section>
}

export default Location