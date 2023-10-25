import ProjectCard from '../ProjectCard/ProjectCard'
import { projectData } from "../../data/projectinfo"
import "./ProjectGrid.css"

const ProjectGrid = () => {

    return (
        <div className="projectgrid__container">
            <h2 id="projects">
                Projects
            </h2>
            <div className="projectgrid__cards-container">
                {projectData.map((data) => {
                    return (
                        <ProjectCard data={data}/>
                    )
                })}
            </div>
        </div>

    )
}

export default ProjectGrid