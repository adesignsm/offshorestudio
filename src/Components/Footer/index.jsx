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
                        <li><a href="https://instagram.com/offshore.studio" target="_blank"><img src={INSTAGRAM} /></a></li>
                        <li><a href="mailto:info@offshorestudio.co"><img src={MAIL} /></a></li>
                        <li><img src={PHONE} /></li>
                        <li><a href="https://goo.gl/maps/gGcJ3DNxT2v5W7L28" target="_blank"><img src={LOCATION} /></a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;