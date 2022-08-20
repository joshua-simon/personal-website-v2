import Header from "../components/Header";
import LeftSideNav from "../components/LeftSideNav";
import HomeMain from "../components/HomeMain";

const Home = () => {
    return ( 
    <div className="layout">
      <Header/>
      <LeftSideNav/>
      <div className="home-main">
        <HomeMain/>
      </div>
    </div> 
    );
}
 
export default Home;