import wellyadvisor from '../images/icons/welly-coffee-review.png'
import fml from '../images/icons/fml.png'
import instagram from '../images/icons/instagram.png'

const ProjectsMain = () => {

    const projects = [
        {name: 'Wellyadvisor', tech: 'React | Firebase', image: wellyadvisor},
        {name: 'Follow My Lead', tech: 'React | Express | SQLite3', image: fml},
        {name: 'Instagram-ish', tech: 'React | Firebase', image: instagram},
    ]

    const projectList = projects.map((item,idx) => {
        return(
            <div className='project' key = {idx}>
                <img src = {item.image}/>
                <h3>{item.name}</h3>
                <h4>{item.tech}</h4>
            </div>
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