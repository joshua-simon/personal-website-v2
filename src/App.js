import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Project from './pages/Project';
import './styles.css'

const App = () =>  {
  return (
    <Router>
      <Routes>
        <Route path = '/' exact element = {<Home/>}></Route>
        <Route path = '/about'  element = {<About/>}></Route>
        <Route path = '/projects' element = {<Projects/>}></Route>
        <Route path = '/projects/:id' element = {<Project/>}></Route>
        <Route path = '/contact' element = {<Contact/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
