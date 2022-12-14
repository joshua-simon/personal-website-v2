import Header from "../components/Header";
import LeftSideNav from "../components/LeftSideNav";
import joshpic from '../images/icons/josh_pic3.png'

const About = () => {

    return ( 
    <div className="layout">
        <Header/>
        <LeftSideNav/>
        <div className="about"> 
            <h1>About Josh</h1>
            <div className="about-blurb">
                <p>
                    Hi there! I'm Josh. After completing a short Codecademy course on Python, I discovered a
                    love for coding and building web pages - this eventually led me to undertake a 4-month web development
                    bootcamp with Enspiral Dev Academy. It was during this time I honed in my programming skills, learning 
                    not only the React-Redux-Express-SQLite3 stack, but invaluable human skills that I have found incredibly useful.
                    <br></br>
                    When I'm not coding I'm practising saxophone, playing music and <a href = 'https://soundcloud.com/josh-simon-264281792'>composing</a>,
                    and love the outdoors and taking advantage of the amazing coffee, beer and live music Wellington has to offer.
                </p>
                <img src = {joshpic}/>
            </div>
            <div className="skills">
                <h1>Key Skills</h1>
                <h2>React •  Redux • CSS </h2>
                <h2>Node • Express </h2>
                <h2>Firebase • SQLite3 </h2>
                <h3>Currently learning</h3>
                <h4>Typescript •  Sass CSS </h4>
            </div>
        </div>
    </div> 
    )
}
 
export default About;