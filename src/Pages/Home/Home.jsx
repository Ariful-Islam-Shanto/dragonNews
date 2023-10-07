import { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/NavBar/Nav";
import BreakingNews from "../../Components/Shared/Breaking news/BreakingNews";
import LeftsideNav from "../../Components/Shared/Leftside Nav/LeftSideNav";
import RightSideNav from "../../Components/Shared/RightSideNav/RightSideNav";
import CategoryNews from "../../Components/Category News/CategoryNews";
import NewsDetails from "../../Components/Shared/News Details/NewsDetails";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const [cateNews, setCateNews] = useState([]);
  const [displayNews, setDisplayNews] = useState([]);
  const [showDetails, setShowDetails] = useState([]);
  const [isShowDetails, setIsShowDetails] = useState(false);

  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setCateNews(data));
  }, []);

  const handleNewsId = (id) => {
    if(id === '0') {
        setDisplayNews(cateNews);
    }else{
        const categoryData = cateNews.filter((data) => data.category_id === id);
        setDisplayNews(categoryData);
    }
   
  };

  console.log(import.meta.env.VITE_APIKEY);

  //? Handling the details route 
  const handleNewsDetails = (id, path) => {
    if(!user) {
        location.state = path;
        console.log(path);
        return navigate('/login');
        
    }
    const detailsNews = displayNews.find((data) => data._id === id);
    setShowDetails(detailsNews);
    console.log(detailsNews);
    setIsShowDetails(!isShowDetails);
  }

  console.log(displayNews);

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Nav setIsShowDetails={setIsShowDetails}></Nav>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {
            isShowDetails ?     
            <div className="col-span-3 border">
            <NewsDetails setIsShowDetails={setIsShowDetails} showDetails={showDetails}>
            </NewsDetails>
            </div>
        :
            <>
        <div className="">
          <LeftsideNav 
          handleNewsId={handleNewsId} 
          ></LeftsideNav>
        </div>
        <div className=" col-span-1 md:col-span-2 h-[1440px] overflow-y-scroll">
          {displayNews.length > 0 ? (
            displayNews.map((news, index) => <CategoryNews handleNewsDetails={handleNewsDetails} key={index} displayNews={news}></CategoryNews>)
          ) : (
            <div className="flex items-center justify-center bg-amber-50 h-[100vh]">
            <h1 className="text-4xl text-black text-bold">No news to display <span className="text-red-400">!</span></h1>
            </div>
          )}
        </div>
        </>
}
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
