import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

console.log(Shimmer)

const RestaurantMenu = () => {
  //how to read dynamic url (params)
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4529334&lng=81.8348882&restaurantId=" + resId
    );
    const json = await data.json();
    console.log(json);

    setRestaurant(json?.data?.cards);
  }

  
  return (!restaurant) ? <Shimmer /> : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurant[0]?.card?.card?.info?.name}</h2>
        <h2>{restaurant[0]?.card?.card?.info?.city}</h2>
        <img
          src={IMG_CDN_URL + restaurant[0]?.card?.card?.info?.cloudinaryImageId}
        />
      </div>
      <div>
        {console.log(
          restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
            ?.card
        )}
        <h1>Menu</h1>
        <ul>
          {restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
            ?.card?.itemCards &&
            Object.values(
              restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
                ?.itemCards
            ).map((card) => (
              <li key={card.card.info.id}> {card.card.info.name} </li>
            ))}
        </ul>
      </div>
    </div>
  );
};



export default RestaurantMenu;
