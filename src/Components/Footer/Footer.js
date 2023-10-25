import { FaLinkedin, FaGithub } from "react-icons/fa";
import IconButton from '../IconButton/IconButton';
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer__container">
        <div className="footer__contents">
            <div>
                <IconButton
                    icon={<FaLinkedin />}
                    href="https://www.linkedin.com/in/issaitorres/"
                />
                <IconButton
                    icon={<FaGithub />}
                    href="https://github.com/issaitorres/Portfolio"
                />
            </div>
            <div className="footer__copyright">
                Issai Torres © 2023
            </div>
        </div>
    </div>
  )
}

export default Footer
