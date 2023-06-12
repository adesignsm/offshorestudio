import INSTAGRAM from "../../Assets/Media/Icons/ig.svg";
import MAIL from "../../Assets/Media/Icons/mail.svg";
import PHONE from "../../Assets/Media/Icons/call.svg";
import LOCATION from "../../Assets/Media/Icons/map.svg";

import "./index.css";

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="copyrights">
                    <p> All rights reserved </p>
                    <p> Copyrights under <span> Offshorestudio </span></p>
                </div>
                <div className="socials">
                    <ul>
                        <li><img src={INSTAGRAM} /></li>
                        <li><img src={MAIL} /></li>
                        <li><img src={PHONE} /></li>
                        <li><img src={LOCATION} /></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;