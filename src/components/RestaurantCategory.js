import ItemList from "./ItemList";
 
const RestaurantCategory = ({data, showItems, setShowIndexj}) => {
    
    const handleClick = ()=>{
        setShowIndex();

    };
    return <div>
        {/* header*/}
       <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
            <div className="flex justify-between" onClick={handleClick}>
            <span className="font-bold">{data.title} ({data.itemCards.length})</span>
            <span>{showItems ? "🔼" : "🔽"}</span>
            </div>
            
            {/* accordian body */}
           { showItems && <ItemList items={data.itemCards}/>}
            
       </div>
           
    </div>
};

export default RestaurantCategory;