import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({name, cuisines, cloudinaryImageId, avgRating, slaString, costForTwoString }) => {
    
    return (
        <div className="card">
            <img src= {
                IMG_CDN_URL +
                cloudinaryImageId
            }/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>★{avgRating}</h4>
            <h4>{slaString}</h4>
            <h4>{costForTwoString}</h4>
            

        </div>
    );
};

export default RestaurantCard;