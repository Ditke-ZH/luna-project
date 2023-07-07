import { useState, useEffect } from "react";
import { Suspense } from "react";
import Container from "../../components/container/Container";
import { axiosLuna } from "../../axios/axiosInstance";
import ResturantCard from "../../components/ResturantCard";
import ReviewCard from "../../components/ReviewCard";
import UserSearchCard from "../../components/userSearchCard";
import Loader from "../../components/Loader/Loader";
import "./search.css";

const menuItems = ["Restaurants", "Reviews", "Users"];

const Search = () => {
  const [search, setSearch] = useState();
  const [categories, setCategories] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [restaurantsData, setRestaurentsData] = useState();
  const [reviewsData, setReviewsData] = useState();
  const [usersData, setUsersData] = useState();

  console.log(restaurantsData);
  console.log(reviewsData);
  console.log(usersData);

  useEffect(() => {
    axiosLuna
      .get("/category/list/")
      .then(res => setCategories(res.data))
      .catch(err => console.log(err.message));
  }, []);

  /* Restaurants Data*/
  useEffect(() => {
    axiosLuna
      .get("/restaurants/")
      .then(res => setRestaurentsData(res.data))
      .catch(err => console.log(err.message));
  }, []);
  /* Reviws Data*/
  useEffect(() => {
    axiosLuna
      .get("search/?type=reviews")
      .then(res => setReviewsData(res.data))
      .catch(err => console.log(err.message));
  }, []);
  /* users Data*/
  useEffect(() => {
    axiosLuna
      .get("search/?type=users")
      .then(res => setUsersData(res.data))
      .catch(err => console.log(err.message));
  }, []);

  console.log(categories);
  console.log(search);
  return (
    <article>
      <div className="search-category-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="categrories-menu"
          value={categories}
          onChange={e => setCategories(e.target.value)}
        >
          <option selected value="" className="categrories-menu-title">
            Select a category
          </option>
          {categories?.map(item => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <Container>
        <menu className="menu-items-container">
          {menuItems.map((item, idx) => (
            <h3
              key={idx}
              className={
                activeIndex === idx
                  ? "page-title-active active-menu"
                  : "page-title-active"
              }
              onClick={() => setActiveIndex(idx)}
            >
              {item}
            </h3>
          ))}
        </menu>
        <div className="search-body-container">
          {activeIndex === 0 && (
            <Suspense fallback={<Loader />}>
              {restaurantsData?.map((item, idx) => (
                <ResturantCard
                  key={idx}
                  title={item.name}
                  address={item.street}
                  totalRatingNumber={item.rating_count}
                  StarsNumber={item.rating_average}
                  image={item.image}
                  id={item.id}
                />
              ))}
            </Suspense>
          )}
          {activeIndex === 1 && (
            <Suspense fallback={<Loader />}>
              {reviewsData.map((item, idx) => (
                <ReviewCard
                  key={idx}
                  userId={item.user}
                  restaurantName={item.restaurant.name}
                  restaurantId={item.restaurant.id}
                  commentText={item.text_content}
                  likesNumber={item.liked_by?.length}
                  commentsNumber={item.comments?.length}
                  comments={item.comments}
                />
              ))}
            </Suspense>
          )}
          {activeIndex === 2 && (
            <Suspense fallback={<Loader />}>
              {usersData.map((item, idx) => (
                <UserSearchCard
                  key={idx}
                  profileImage={item.profile_picture}
                  firstName={item.first_name}
                  lastName={item.last_name}
                  about={item.user_description}
                />
              ))}
            </Suspense>
          )}
        </div>
      </Container>
    </article>
  );
};

export default Search;
