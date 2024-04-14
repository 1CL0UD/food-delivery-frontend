import { useContext } from 'react';
import { ContextValue, StoreContext } from '../providers/StoreProvider';
import FoodItem from './FoodItem';

interface Props {
  category: string;
}
const FoodDisplay = ({ category }: Props) => {
  const { food_list } = useContext(StoreContext) as ContextValue;
  return (
    <div className="food-display mt-8">
      <h2 className="text-2xl font-bold">Top Dishes ({category})</h2>
      <div className="food-display-list grid grid-cols-4 mt-8 gap-8 gap-y-12">
        {food_list.map((item) =>
          category === 'All' || category === item.category ? (
            <FoodItem key={item._id} item={item} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
