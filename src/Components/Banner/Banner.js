import { FaExclamationTriangle, FaCheck } from "react-icons/fa";
import "./Banner.css"


const Banner = ({ notice, bannerType, bannerPosition }) => {
    const bannerStyle = bannerType === "success" ? "banner__success" : "banner__warning"
    const bannerIcon = bannerType === "success" ?  <FaCheck className="banner__icon"/> : <FaExclamationTriangle className="banner__icon" />
    const bannerPos = bannerPosition === "fixed" ? "banner__fixed-container" : "banner__flex-container"

    return (
        <div className={bannerPos}>
            <div className={`banner ${bannerStyle}`}>
                <div>
                    {bannerIcon}
                </div>
                <div className="banner__notice">
                    {notice}
                </div>
            </div>
        </div>
    )
}

export default Banner
