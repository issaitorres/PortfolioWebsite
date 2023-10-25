import main from "../../Assets/main-profile.jpeg"
import "./About.css"

const About = () => {
  return (
    <div className="about__container">
        <div className="about__section">
            <img src={main} alt="profile_picture"/>
        </div>
        <div className="about__section">
            <p>
                I'm Issai Torres and I am a Software Developer who enjoys solving
                challenging problems and always looking to learn new software.
            </p>
        </div>
    </div>
  )
}

export default About
