import Header from "../components/Header";
import LeftSideNav from "../components/LeftSideNav";

const Home = () => {
    return ( 
    <div className="home">
      <Header/>
      <LeftSideNav/>
      <div className="home-main">
          main content
      </div>
    </div> 
    );
}
 
export default Home;