 import { Link } from "react-router-dom"

 const Header = () => {

    const destinations = [
        {path: '/', idString: 'navlink-home', text: 'Home'},
        {path: '/about', idString: 'navlink-about', text: 'About'},
        {path: '/projects', idString: 'navlink-projects',  text: 'Projects'}
    ]

    const links = destinations.map((dest,idx) => <Link to = {dest.path} key = {idx} id = {dest.idString} className = 'navlink'>{dest.text}</Link>)

    return ( 
        <header>
            <div>JS</div>
            <nav className="header-nav">
                {links}
            </nav>
        </header>
     )
 }
  
 export default Header;