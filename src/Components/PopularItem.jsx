export default function PopularItem(food) {
    const foodDetails = food.food;
  return (
    <div>
      <div>
        <img src={foodDetails.ImageUrl} alt="" className="h-[200px] w-[400px]" />
      </div>
      <p className="text-sm text-center">{foodDetails.Name}</p>
    </div>
  );
}
