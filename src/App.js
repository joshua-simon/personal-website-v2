import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles.css'

const App = () =>  {
  return (
    <Router>
      <Routes>
        <Route path = '/' exact element = {<Home/>}></Route>
        {/* <Route path = '/about' exact element = {<About/>}></Route>
        <Route path = '/projects' exact element = {<Projects/>}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
