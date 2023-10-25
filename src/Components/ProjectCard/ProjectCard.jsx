import Carousel from '../Carousel/Carousel'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./ProjectCard.css"


const ProjectCard = ({ data }) => {
  return (
    <div className="projectcard__container">
        <h1> {data.title} </h1>
        <Carousel content={data.content}/>
        <p>
            {data.desc}
        </p>
        {/* {data.tags[0]} */}

        <div className="projectcard__external-links">
            {Object.entries(data.info).map(([key,value]) => {
                return(
                    <a
                        className='button projectCard__links'
                        href={value}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="projectcard__icon">
                            {key === "github" ? <FaGithub/> : <FaExternalLinkAlt/>}
                        </span>
                        {key}
                    </a>
                )
            })}
        </div>


    </div>
  )
}

export default ProjectCard
