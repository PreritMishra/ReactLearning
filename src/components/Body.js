import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

//What is state?
//What is hooks?
//What is useState

function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) => restaurant.data.name.includes(searchText))

}

const Body = () => {
    const [restaurants,setRestaurants] = useState(restaurantList);
    //SearchText is local state variable 
    const [ searchText, setSearchText ] = useState(""); //returns = [variable namee, function to update the variable]

    return (
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
                    
                    const data = filterData(searchText, restaurants);
                    //update the state - restaurant variable
                    setRestaurants(data);
                 }}
                 >Search</button> 
            </div>
            <div className="restaurant-list">
                {restaurants.map((restaurant) => {
                    return (
                        <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    );
                })}
            </div>
        </>
    );
};

export default Body;
