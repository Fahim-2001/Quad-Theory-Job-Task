import { useState } from "react";
import FoodItem from "./FoodItem";
import CarouselStyle from "../commmonStyles/Carousel.module.css";
import AddFoodForm from "./AddFoodForm";
import { useSelector } from "react-redux";

export default function RecommendedItems() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const foods = useSelector((state) => state.food.foods);
  const recommendedItems = foods.filter((food)=> Boolean(food.IsRecommended) === true);

  // Carousel
  const imageCarousel = document.getElementById("imageCarousel");
  let currentIndex = 0;
  const totalSlides = recommendedItems.length;
  const visibleSlides = 5;
  const slideWidth = 20;

  function nextImage() {
    if (currentIndex < totalSlides - visibleSlides) {
      currentIndex++;
      updateCarousel();
    }
  }

  function prevImage() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }
  
  function updateCarousel() {
    const translateValue = -currentIndex * slideWidth + "%";
    imageCarousel.style.transform = "translateX(" + translateValue + ")";
  }
  return (
    <div className="mb-40 mx-3 md:mx-20 lg:mx-40 overflow-hidden">
      <div className="flex justify-between mb-5">
        <p className="text-lg">Recommended</p>
        <div>
          <div className="flex">
            <button onClick={handleOpen} className="mr-3 hidden md:block">
              <p className="text-orange-600">Add More</p>
            </button>
            <div className="flex">
              <button
                className="mr-2"
                onClick={() => prevImage()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="10"
                  viewBox="0 0 320 512"
                  fill="#A9A9A9"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                </svg>
              </button>
              <button onClick={() => nextImage()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="10"
                  viewBox="0 0 320 512"
                  fill="#36454F"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </button>
            </div>
          </div>

          <AddFoodForm open={open} handleClose={handleClose} />
        </div>
      </div>
      <div id={CarouselStyle.carouselContainer}>
        <div id="imageCarousel" className={CarouselStyle.itemsCarousel}>
          {recommendedItems.map((food, i) => (
            <FoodItem key={i} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
}
