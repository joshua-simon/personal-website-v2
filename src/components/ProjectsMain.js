import { Link } from 'react-router-dom'
import wellyguide from '../images/icons/wellyguide.png'
import fml from '../images/icons/fml.png'
import instagram from '../images/icons/instagram.png'
import bio from '../images/icons/personal-website.png'

const ProjectsMain = () => {

    const projects = [
        {name: 'WellyGuide', tech: 'React | Redux Toolkit | Firebase', image: wellyguide, path: 'wellyguide'},
        {name: 'Follow My Lead', tech: 'React | Express | SQLite3', image: fml, path: 'fml'},
        {name: 'Personal website', tech: 'React | Firebase', image: bio, path: 'personal-website'}
    ]

    const projectList = projects.map((item,idx) => {
        return(
            <Link to = {`/projects/${item.path}`} style = {{textDecoration: 'none', color: '#BBBBBB'}}>
                <div className='project' key = {idx}>
                    <img src = {item.image}/>
                    <h3>{item.name}</h3>
                    <h4>{item.tech}</h4>
                </div>
            </Link>
        )
    })

    return (
      <div className='project-main'>
        <h1>Projects</h1>
        <div className='project-container'>{projectList}</div>
      </div>
    );
}
 
export default ProjectsMain;