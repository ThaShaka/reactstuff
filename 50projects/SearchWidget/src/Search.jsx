import { FaMagnifyingGlass } from "react-icons/fa6";
import {useState} from "react";
function Search() {
    const [visible, isVisible] = useState(false)
    const styles = {
        width: `${visible ? "100%" : "0%"}`
    }
    function handleClick() {
        isVisible(prevState => !prevState)
    }

    return (
        <div className={"searchBar"}>
            <input type="text" placeholder="Search..." style={styles}/>
            <button onClick={handleClick}><FaMagnifyingGlass/></button>
        </div>
    );
}

export default Search;