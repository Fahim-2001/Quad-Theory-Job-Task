import { useState } from "react";
import PopularItem from "../PopularItem";
import PopularItemsStyle from "./PopularItems.module.css";
import CarouselStyle from "../../commmonStyles/Carousel.module.css";
import AddFoodForm from "../AddFoodForm";
import { useSelector } from "react-redux";

export default function PopularItems() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const foods = useSelector((state) => state.food.foods);

  console.log(foods);

  // Carousel
  const imageCarousel = document.getElementById("image-carousel");
  let currentIndex = 0;
  const totalSlides = 10;
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
    <div className="mb-10 mx-3 md:mx-20 lg:mx-40">
      <div className="flex justify-between mb-5">
        <p>Popular</p>
        <div>
          <div>
            <button onClick={handleOpen}className="mr-3">
              <p className={PopularItemsStyle.modalButton}>Add More</p>
            </button>
            <button className="mr-2" onClick={()=>prevImage()}>Prev</button>
            <button onClick={()=>nextImage()}>Next</button>
          </div>

          <AddFoodForm open={open} handleClose={handleClose} />
        </div>
      </div>
      <div id={CarouselStyle.carouselContainer}>
        <div id="image-carousel" className={CarouselStyle.itemsCarousel}>
          {foods.map((food, i) => (
            <PopularItem key={i} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
}
