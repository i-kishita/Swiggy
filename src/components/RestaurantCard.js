import { useNavigate } from "react-router-dom";
import {CDN_URL} from "../utils/constant"; 

 const RestaurantCard = (props)=> {
    const { resData } = props;

    const{
        cloudinaryImageId,
        name,
        id,
        cuisines, 
        costForTwo, 
        avgRating, 
        deliveryTime 
    } = resData?.info;


    const navigate = useNavigate()
    return(
        <div onClick={() => navigate("/restaurants/"+id)}
         className="res-card m-4 p-4 w-72 bg-[#f0f0f0]">
        <img 
        className="res-logo"
        alt = "res-logo"
        src = { CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold pb-1 pt-1">{name}</h3>
        <h4>{id}</h4>
        <div className="card-info">
        <h4>{cuisines}</h4>
        <h4>{costForTwo} </h4>
        <h4>{avgRating}stars</h4>
        <h4>{deliveryTime} minutes</h4>
        </div>
    </div>
    );
};

//higher order function

export const withPromotedLabel = (RestaurantCard)=>{
    return(props) =>{
        return(
            <div>
                <labek>promoted</labek>
                <RestaurantCard/> {...props}
            </div>
        )

    };
};

export default RestaurantCard; 