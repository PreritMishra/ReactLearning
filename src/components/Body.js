import { useState, useEffect } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

//What is state?
//What is hooks?
//What is useState

function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()))

}
//hooks A normal js function coming from react library
const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    //SearchText is local state variable 
    //useState is used to update the local state variable 
    const [ searchText, setSearchText ] = useState(""); //returns = [variable namee, function to update the variable]
    // useeffect => empty depemdency array => once after render
    //dependency array [searchText] => once after initial render + everytime after rerender (my searchText changes)
    //whereas empty dependency array means callback will be calledd once after render 
    useEffect(()=> {
        getRestaurants();
    }, []);
    
    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4529334&lng=81.8348882&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    console.log("render")
    //conditional rendering
    //if restaurant is empty => shimmer UI
    //if restaurant has data => actual data UI
    
    if(!allRestaurants) return null; // Avoid rendering (not render component (early return))

    // if(filteredRestaurants?.length === 0) 
    //     return <h1>No restaurant found</h1>

    return (allRestaurants?.length === 0) ? <Shimmer /> : (
        <>
            <div className="search-container">
                <input
                 type="text" 
                 className="search-input" 
                 placeholder="Search" 
                 value= {searchText}
                 onChange={(e) => {
                    setSearchText(e.target.value);
                 }}
                />
                <button
                 className="search-btn"
                 onClick={()=>{
                    //need to filter the data
                    
                    const data = filterData(searchText, allRestaurants);
                    //update the state - restaurant variable
                    setFilteredRestaurants(data);
                 }}
                 >Search</button> 
            </div>
            <div className="restaurant-list">
                
                {filteredRestaurants.map((restaurant) => {
                    return (
                        <Link to={"/restaurant/" + restaurant.data.id}  key={restaurant.data.id}>
                            <RestaurantCard {...restaurant.data} />
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default Body;
