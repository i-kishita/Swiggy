import { useParams  } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurnatMenu";
import Shimmer from "./ShimmerNew";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = ()=>{
    
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if(resInfo === null) return <Shimmer/>;

    const {name, city, costForTwoMessage, cuisines} = resInfo?.cards?.[2]?.card?.card?.info;

    // const itemCards = resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[15]?.card?.card?.itemCards || [];

    console.log(resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    const handleToggle = (index) => {
        setShowIndex(showIndex === index ? null : index);
    };

    return(
        <div className="menu text-center p-4 md:p-8 lg:p-12">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl my-8">{name}</h1> 
            <p className="font-bold text-lg md:text-xl lg:text-2xl text-slate-400">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/* accordion design */}
            {categories.map((category, index)=> (
                <RestaurantCategory
                  key={category?.card?.card.title}
                  data = {category?.card?.card}
                  showItems = { index === showIndex }
                  setShowIndex= {()=> handleToggle(index)}
                  />
                ))}
        </div>

    );
};
export default RestaurantMenu;