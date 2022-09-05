import { Link } from 'react-router-dom'
import wellyadvisor from '../images/icons/welly-coffee-review.png'
import fml from '../images/icons/fml.png'
import instagram from '../images/icons/instagram.png'
import bio from '../images/icons/personal-website.png'

const ProjectsMain = () => {

    const projects = [
        {name: 'Wellyadvisor', tech: 'React | Firebase', image: wellyadvisor, path: 'wellyadvisor'},
        {name: 'Follow My Lead', tech: 'React | Express | SQLite3', image: fml, path: 'fml'},
        {name: 'Instagram-ish', tech: 'React | Firebase', image: instagram, path: 'instagram-ish'},
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