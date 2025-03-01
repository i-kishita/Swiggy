// import { useNavigate } from "react-router-dom";
// import {CDN_URL} from "../utils/constant"; 

//  const RestaurantCard = (props)=> {
//     const { resData } = props;

//     const{
//         cloudinaryImageId,
//         name,
//         id,
//         cuisines, 
//         costForTwo, 
//         avgRating, 
//         deliveryTime 
//     } = resData?.info;


//     const navigate = useNavigate()
//     return(
//         <div onClick={() => navigate("/restaurants/"+id)}
//          className="res-card m-4 p-4 w-72 bg-[#f0f0f0]">
//         <img 
//         className="res-logo"
//         alt = "res-logo"
//         src = { CDN_URL + cloudinaryImageId}
//         />
//         <h3 className="font-bold pb-1 pt-1">{name}</h3>
//         <h4>{id}</h4>
//         <div className="card-info">
//         <h4>{cuisines}</h4>
//         <h4>{costForTwo} </h4>
//         <h4>{avgRating}stars</h4>
//         <h4>{deliveryTime} minutes</h4>
//         </div>
//     </div>
//     );
// };

// //higher order function

// export const withPromotedLabel = (RestaurantCard)=>{
//     return(props) =>{
//         return(
//             <div>
//                 <labek>promoted</labek>
//                 <RestaurantCard/> {...props}
//             </div>
//         )

//     };
// };

// export default RestaurantCard; 

import { useNavigate } from "react-router-dom";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        id,
        cuisines,
        costForTwo,
        avgRating,
        deliveryTime
    } = resData?.info;

    const navigate = useNavigate();

    return (
        <div 
            onClick={() => navigate("/restaurants/" + id)}
            className="res-card m-4 p-4 bg-[#f0f0f0] rounded-lg shadow-lg 
                       max-w-sm w-full md:w-80 lg:w-72 transition-transform hover:scale-105"
        >
            <img
                className="w-full h-40 object-cover rounded-md"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold text-lg pt-2 truncate">{name}</h3>
            <h4 className="text-gray-600 text-sm">{id}</h4>
            <div className="card-info mt-2 text-sm text-gray-700">
                <h4 className="truncate">{cuisines.join(", ")}</h4>
                <h4>{costForTwo}</h4>
                <h4>{avgRating} ⭐</h4>
                <h4>{deliveryTime} min</h4>
            </div>
        </div>
    );
};

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative">
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                    Promoted
                </span>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;
