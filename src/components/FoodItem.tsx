import { useContext } from 'react';
import { assets } from '../assets/assets';
import {
  ContextValue,
  FoodList,
  StoreContext,
} from '../providers/StoreProvider';

interface Props {
  item: FoodList;
}
const FoodItem = ({ item }: Props) => {
  const { cartItems, addToCart, removeFromCart } = useContext(
    StoreContext
  ) as ContextValue;
  return (
    <div className="food-item w-full m-auto rounded-2xl shadow-lg animate-fadein ">
      <div className="food-item-img-container relative">
        <img
          className="food-item-image rounded-t-2xl w-full"
          src={item.image}
          alt=""
        />
        {!cartItems[item._id] ? (
          <img
            className="add absolute w-10 bottom-4 right-4 cursor-pointer rounded-full transition ease-in-out hover:-translate-x-1"
            onClick={() => addToCart(item._id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter absolute bottom-4 right-4 flex items-center gap-3 p-1 rounded-full bg-white">
            <img
              className="w-8 cursor-pointer"
              onClick={() => removeFromCart(item._id)}
              src={assets.remove_icon_red}
            />
            <p>{cartItems[item._id]}</p>
            <img
              className="w-8 cursor-pointer"
              onClick={() => addToCart(item._id)}
              src={assets.add_icon_green}
            />
          </div>
        )}
      </div>
      <div className="food-item-info p-5">
        <div className="food-item-name-rating flex justify-between items-center mb-2">
          <p className=" text-xl font-semibold">{item.name}</p>
          <img src={assets.rating_starts} alt="rating" className=" max-w-20" />
        </div>
        <p className="food-item-desc text-gray-700 text-sm">
          {item.description}
        </p>
        <p className="food-item-price text-orange-600 text-xl font-medium my-2">
          ${item.price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
