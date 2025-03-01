import { useEffect, useState, useContext } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './ShimmerNew';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';


const Body = () => {
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State Variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState('');


  // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)
  console.log('Body rendered');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://restaurant-data.onrender.com/api/v1/restaurants/data"
    );

    const json = await data.json();

    console.log(json);
    // * optional chaining
    // setListOfRestaurants(json.data.cards[2].data.data.cards);
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // * Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }
  const OnlineStatus = useOnlineStatus();
  
  if(OnlineStatus === false)
    return(
      <h1>
        Hey! You are offline. Please check your internet connection.
      </h1>
    );

  const{loggedInUser,setUserName} = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Search a restaurant you want..."
            className="border border-gray-900 border-solid"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="m-2 p-1 bg-emerald-200"
            onClick={() => {
              // * Filter th restaurant cards and update the UI
              // * searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="filter-btn bg-gray-100 px-4 py-2 rounded-lg "
            onClick={() => {
            //  filterLogic
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );

              setFilteredRestaurant(filteredList);
              console.log(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>user:</label>
          <input className="border border-black p-2 "
           value = {loggedInUser}
           onChange={(e)=>setUserName(e.target.value)}
          />  
        </div>
      </div>
      <div className="res-container flex flex-wrap pl-20 ">
        {/* looping through the <RestaurentCard /> components Using Array.map() method  */}
        {filteredRestaurant.map((restaurant) =>(
          <div
            key={restaurant?.data?.id}
          >
          {restaurant?.data?.promoted ? (
              <RestaurantCardPromoted resData={restaurant}/> 
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </div>  
        ))}
      </div>
    </div>
  );
};

export default Body;
