import Header from "../components/Header";
import LeftSideNav from "../components/LeftSideNav";
import { useParams } from 'react-router-dom';


const Project = () => {

    let { id } = useParams();

    const projectInfo = [
        {
        name: 'WellyGuide',
        description: "A review webite for Wellington venues, based on Tripadvisor.", 
        tech: 'React | Redux Toolkit | Firebase',
        website: 'https://wellyadvisor-with-redux.web.app/',
        repo: 'https://github.com/joshua-simon/wellyadvisor-redux'
        },
        {
        name: 'Follow My Lead', 
        description: 'My final group project for Dev Academy, built as part of a team of 5 people. An app that pairs dog walkers with dog owners', 
        tech: 'React | Express | SQLite3',
        website: 'https://f-m-l.herokuapp.com/',
        repo: 'https://github.com/kahu-2020/Follow-My-Lead'
        },
        {
        name: 'Personal Website',
        description: "Built as an improvement on my previous website, with a focus on responsive design",
        tech: 'React | Firebase',
        website: 'https://joshua-simon-c2ef0.web.app/',
        repo: 'https://github.com/joshua-simon/personal-website-v2'
        },
    ]

    let project

    switch(id) {

        case 'wellyguide':
        project = projectInfo[0]
        break;

        case 'fml':
        project = projectInfo[1]
        break;
        
        case 'personal-website':
        project = projectInfo[2]
        break;

    }


    return ( 
    <div className="layout">
        <Header/>
        <LeftSideNav/>
        <div className="project-single"> 
           <h1 id =  'project-item'>{project.name}</h1>
           <h3 id = 'project-single-heading'>About</h3>
           <p id =  'project-item'>{project.description}</p>
           <h3 id = 'project-single-heading'>Tech Stack</h3>
           <p id =  'project-item'>{project.tech}</p>
           <div className="buttons-container" >
                {project.website ? <a href = {project.website}>Website</a> : null}
                <a href = {project.repo}>Repo</a>
           </div>
        </div>
    </div> 
    );
}
 
export default Project;