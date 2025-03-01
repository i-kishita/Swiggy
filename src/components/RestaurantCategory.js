import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    
    const handleClick = () => {
        setShowIndex();
    };

    return (
        <div className="w-full md:w-8/12 lg:w-6/12 mx-auto my-4">
            {/* header */}
            <div className="bg-gray-50 shadow-lg p-4 rounded-lg cursor-pointer" onClick={handleClick}>
                <div className="flex justify-between items-center">
                    <span className="font-bold text-lg md:text-xl lg:text-2xl">{data.title} ({data.itemCards.length})</span>
                    <span className="text-lg md:text-xl lg:text-2xl">{showItems ? "🔼" : "🔽"}</span>
                </div>
            </div>
            
            {/* accordion body */}
            {showItems && (
                <div className="bg-white shadow-lg p-4 rounded-lg mt-2">
                    <ItemList items={data.itemCards} />
                </div>
            )}
        </div>
    );
};

export default RestaurantCategory;