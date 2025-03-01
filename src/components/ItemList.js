import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex flex-wrap justify-center">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="m-2 p-2 border-gray-200 border-b-2 text-left flex flex-col md:flex-row justify-between w-full md:w-1/2 lg:w-1/3"
        >
          <div className="w-full md:w-9/12">
            <div className="py-2">
              <span className="block text-lg font-bold">{item?.card?.info?.name}</span>
              <span className="block text-sm text-gray-600">
                - ₹{item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item?.card?.info?.description}</p>
          </div>
          <div className="w-full md:w-3/12 p-4 relative">
            <button
              className="p-1 mx-2 bg-white shadow-lg absolute top-0 right-0"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
            <img src={CDN_URL + item?.card?.info?.imageId} className="w-full" alt="Item" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
