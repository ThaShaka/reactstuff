function Step({value, isActive}) {
    return <div className={`step ${isActive ? "active" : ""}`}>{value}
    </div>

}

export default Step;