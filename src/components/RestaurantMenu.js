import { useParams  } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurnatMenu";
import Shimmer from "./ShimmerNew";

const RestaurantMenu = ()=>{
    
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer/>;

    const {name, city, costForTwoMessage} = resInfo?.cards?.[2]?.card?.card?.info;

    const itemCards = resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[15]?.card?.card?.itemCards || [];
    
    return(
        <div className="menu">
            <h1>{name}</h1>
            <h1>{costForTwoMessage}</h1>
            <h2>{city}</h2>
            <ul>
                {itemCards.length > 0 ? (
                    itemCards.map((item) => (
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                    ))
                ) : (
                    <li>No menu items available</li>
                )}
            </ul>
        </div>

    )
};
export default RestaurantMenu;