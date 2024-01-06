import { useEffect, useState } from "react";
import PopularItem from "./PopularItem";

export default function PopularItems() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const getFoodItems = async () => {
      const foodItems = await fetch(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
      ).then((res) => res.json());
      setFoods(foodItems.Items);
    };
    getFoodItems();
  }, []);
  // console.log(foods);

  return (
    <div>
      <div className="flex justify-between">
        <p>Popular</p>
        <div>
          <p className="text-orange-500">Add More</p>
        </div>
      </div>
      <div className="flex gap-5">
        {foods.map((food, i) => (
          <PopularItem key={i} food={food} />
        ))}
      </div>
    </div>
  );
}
