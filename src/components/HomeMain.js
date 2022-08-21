import { Link } from "react-router-dom";
import profile from '../images/icons/profile.png'
import phone from '../images/icons/phone.png'
import project from '../images/icons/webpage.png'

const HomeMain = () => {

    const links = [
        {
            name: 'Projects', path: '/projects', icon: project
        },
        {
            name: 'About', path: '/about', icon: profile
        },
        {
            name: 'Contact', path: '/contact', icon: phone
        }
    ]

    const linkList = links.map((item,idx) => <Link to = {item.path} key = {idx}><div className="info-container" id = {`item-${idx}`}><img src = {item.icon}/><h2>{item.name}</h2></div></Link> )

    return ( 
    <div className="homemain-main">
        <div className="homemain-text">
            <h3 id = 'text'>Kia Ora! My name is</h3> 
            <h1 id = 'text'>Joshua Simon</h1>
            <p id = 'text'>
                I'm a front-end developer in Wellington with a background in biochemistry and music. 
                I bring excellent problem-solving and interpersonal skills accumulated from my experience
                working as a scientist and tutor, with a solid grasp of front-end technologies.
            </p>
        </div>
        <div className="homemain-links">
            {linkList}
        </div>
    </div> 
    );
}
 
export default HomeMain;