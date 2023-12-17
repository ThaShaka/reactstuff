import navLogo from "./../images/react-icon-small.png";

function Navbar(props) {
    return <nav
        /* eslint-disable-next-line react/prop-types */
        className={props.mode ? "dark" : ""}>
        <img
            className="nav--logo_icon"
            src={navLogo}
            alt="ADSDASD"
        />
        <h3 className="nav--logo_text">ReactFacts</h3>

        <div
            className="toggler"
        >
            <p className="toggler--light">Light</p>
            <div
                className="toggler--slider"
                /* eslint-disable-next-line react/prop-types */
                onClick={props.toggle}
            >
                <div className="toggler--slider--circle"></div>
            </div>
            <p className="toggler--dark">Dark</p>
        </div>
    </nav>
}

export default Navbar;