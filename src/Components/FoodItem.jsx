export default function FoodItem(food) {
  const foodDetails = food.food;
  return (
    <div>
      <div className="">
        <img
          src={foodDetails.ImageUrl}
          alt=""
          className="h-48 w-52 lg:h-52 lg:w-96 rounded-xl shadow"
        />
      </div>
      <p className="text-sm text-center mt-2 text-gray-700">
        {foodDetails.Name}
      </p>
    </div>
  );
}
