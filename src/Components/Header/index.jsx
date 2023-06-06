import "./index.css";

const Header = () => {
    return (
        <>
            <div id="header">
                <div className="title-container">
                    <h1> Offshore </h1>
                    <h1> Studio </h1>
                </div>
                <div className="subtext-container">
                    <p>
                        Automated DJ booking studio based
                        in Toronto, Ontario. Lorem ipsum
                        text to fill up space.
                    </p>
                </div>
                <div className="menu-container">
                    <button> Menu </button>
                </div>
            </div>
        </>
    )
}

export default Header;