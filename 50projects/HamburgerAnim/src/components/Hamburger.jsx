import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
function Hamburger({isToggled, toggle}) {
    return <nav className={`${toggle ? "toggledBtn" : "untoggled"}`}>
        <button onClick={isToggled}>
            <FaBars size={"30px"}  />
        </button>
        <button className={"close"}>
            <IoCloseSharp size={"40px"} onClick={isToggled} />
        </button>
    </nav>
}
export default Hamburger;