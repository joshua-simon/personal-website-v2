import Header from "../components/Header";
import LeftSideNav from "../components/LeftSideNav";
import ProjectsMain from "../components/ProjectsMain";

const Projects = () => {

   
    return ( 
    <div className="layout">
        <Header/>
        <LeftSideNav/>
        <div className="projects-main-container"> 
            <ProjectsMain/>
        </div>
    </div> 
    );
}
 
export default Projects;