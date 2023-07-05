import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/Button/Button";
import ResturantCard from "../../components/ResturantCard";
import ImagePlaceHolder from "../../assets/images/resturnat-image-placeholder.jpg";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./home.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const dummyContent = [
  {
    name: "Resturant Name",
    address: "Address",
    totalRatingNumber: 20,
    startsNumber: 5,
  },
  {
    name: "Resturant Name",
    address: "Address",
    totalRatingNumber: 50,
    startsNumber: 2,
  },
  {
    name: "Resturant Name",
    address: "Address",
    totalRatingNumber: 10,
    startsNumber: 3,
  },
  {
    name: "Resturant Name",
    address: "Address",
    totalRatingNumber: 30,
    startsNumber: 1,
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [serach, setSearch] = useState("");
  const handelSearch = (e) => {
    e.preventDefault();
  };
  const onClickHandler = () => {
    navigate(`/restaurants/${props.restaurant.id}`);
  };

  return (
    <main>
      <article className="home-hero-section">
        <Container>
          <form className="search-conatiner" onSubmit={handelSearch}>
            <input
              className="search-input"
              type="text"
              placeholder="Search..."
              value={serach}
              onChange={(e) => setSearch(e.target.value)}
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
            {dummyContent.map((item, idx) => (
              <SwiperSlide key={idx} style={{ width: "fit-content" }}>
                <ResturantCard
                  onClick={onClickHandler}
                  title={item.name}
                  address={item.address}
                  totalRatingNumber={item.totalRatingNumber}
                  StarsNumber={item.startsNumber}
                  image={ImagePlaceHolder}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      </Container>
    </main>
  );
};

export default Home;
