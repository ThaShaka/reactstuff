
const Box = ({on, toggle, id}) => {
   

   
    const styles = {
      backgroundColor: on ? "#222222" : "white",
  }
  return (
    <div className="box" style={styles} onClick={()=>toggle(id)} ></div>
  )
  
}

export default Box