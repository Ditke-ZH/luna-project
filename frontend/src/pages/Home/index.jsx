import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/Button/Button";
import ResturantCard from "../../components/ResturantCard";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import { axiosLuna } from "../../axios/axiosInstance";
import { setAllInformation } from "../../store/slices/user";
import "./home.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  const [restaurantsData, setRestaurantsData] = useState();
  const userLoggedInEmail = useSelector(state => state.user?.email);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [serach, setSearch] = useState("");

  console.log(userLoggedInEmail, "Logged User");

  const handelSearch = e => {
    e.preventDefault();
  };
  const onClickHandler = id => {
    navigate(`search/restaurants/${id}`);
    console.log("clicked");
  };

  useEffect(() => {
    axiosLuna
      .get("/restaurants/")
      .then(res => setRestaurantsData(res.data))
      .catch(err => console.log(err.message));
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axiosLuna.get("/users/");
        console.log(res.data);
        const loggedUser = res.data?.find(
          item => item.email === userLoggedInEmail
        );
        console.log(loggedUser, "loggeduser Email");
        if (loggedUser) {
          console.log(loggedUser, "loggeduser Email");
          dispatch(
            setAllInformation({
              firstName: loggedUser.first_name,
              lastName: loggedUser.last_name,
              username: loggedUser.username,
              avatar: loggedUser.profile_picture,
              banner: "",
              location: loggedUser.location,
              about: "",
              phone: loggedUser.user_phone,
              email: loggedUser.email,
            })
          );
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    if (userLoggedInEmail) {
      fetchUserDetails();
    }
  }, [dispatch, userLoggedInEmail]);
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
            slidesPerView={3}
            spaceBetween={20}
            autoplay={{ delay: 3000 }}
            loop={true}
          >
            {restaurantsData?.map((item, idx) => (
              <SwiperSlide
                key={idx}
                style={{ width: "fit-content" }}
                onClick={() => onClickHandler(item.id)}
              >
                <ResturantCard
                  title={item.name}
                  address={item.street}
                  totalRatingNumber={item.review_count}
                  StarsNumber={item.rating_average}
                  image={item.image}
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
