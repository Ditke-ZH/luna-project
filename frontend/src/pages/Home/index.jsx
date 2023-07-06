import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/Button/Button";
import ResturantCard from "../../components/ResturantCard";
import ImagePlaceHolder from "../../assets/images/resturnat-image-placeholder.jpg";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useSelector } from "react-redux";
import "./home.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {axiosLuna} from "../../axios/axiosInstance.js";

const Home = () => {
  const userAllInformation = useSelector(state => state.user.setAllInformation);
  const navigate = useNavigate();
  const [serach, setSearch] = useState("");
  const [favRestaurants, setFavRestaurants] = useState([])

  useEffect(() => {
    const getFetchData = async () => {
      const res = await axiosLuna.get(`/home`);
      const data = res?.data;
      console.log(data)
      setFavRestaurants(data);
    };
    getFetchData();
  }, []);

  const handelSearch = e => {
    e.preventDefault();
  };
  const onClickHandler = () => {
    navigate(`/restaurants/${""}`);
  };
  console.log(userAllInformation);
  // useEffect(() => {}, []);
  return (
    <>
      <article className="home-hero-section">
        <Container>
          <form className="search-conatiner" onSubmit={handelSearch}>
            <input
              className="search-input"
              type="text"
              placeholder="Search..."
              value={serach}
              onChange={e => setSearch(e.target.value)}
            />
            <Button>Search</Button>
          </form>
        </Container>
      </article>
      <Container>
        <article>
          <h2 className="page-title">Best rated restaurants</h2>
          <Swiper
            className="resturant-cards-container"
            modules={[Navigation, Autoplay]}
            centeredSlides
            slidesPerView={4}
            spaceBetween={20}
            autoplay={{ delay: 2000 }}
            loop={true}
          >
            {favRestaurants.map((item, idx) => (
              <SwiperSlide key={idx} style={{ width: "fit-content" }}>
                <ResturantCard
                  onClick={onClickHandler}
                  title={item.name}
                  address={item.street}
                  totalRatingNumber={item.review_count}
                  StarsNumber={item.rating_average}
                  image={item.image ? item.image : ImagePlaceHolder}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      </Container>
    </>
  );
};

export default Home;
