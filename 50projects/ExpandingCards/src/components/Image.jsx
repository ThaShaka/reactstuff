
function Image({img, desc, active, handleClick,}) {

    return <div className={`card ${active ? "active" : ""}`} onClick={()=>handleClick()}>
        <img src={`src/img/${img}.jpg`} alt=""/>
        <h2 className={desc}>{desc}</h2>
    </div>
}

export default Image;