import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PopularItem from "../PopularItem";
import { useDispatch, useSelector } from "react-redux";
import PopularItemsStyle from "./PopularItems.module.css";
import generateUniqueId from "../../utils/generateUniqueId";
import { addFood } from "../../redux/slices/foodSlice";
import { useForm } from "react-hook-form";

export default function PopularItems() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const foods = useSelector((state) => state.food.foods);
  const dispatch = useDispatch();
  const formRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.Id = generateUniqueId();
    dispatch(addFood(data));
    formRef.current.reset();
  };

  console.log(foods);
  return (
    <div>
      <div className="flex justify-between">
        <p>Popular</p>
        <div>
          <button onClick={handleOpen}>
            <p className={PopularItemsStyle.modalButton}>Add More</p>
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <p>Add New Food</p>
              <form action="" ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  className="my-3 p-1"
                  placeholder="Enter food name here"
                  {...register("Name", { required: true })}
                />
                {errors.Name && (
                  <span className="text-red-500">Name is required</span>
                )}

                <input
                  type="number"
                  className="my-3 p-1"
                  placeholder="Enter food price here"
                  {...register("Price", { required: true })}
                />
                {errors.Price && (
                  <span className="text-red-500">Price is required</span>
                )}

                <input
                  type="text"
                  className="my-3 p-1"
                  placeholder="Enter image url here"
                  {...register("ImageUrl", { required: true })}
                />
                {errors.ImageUrl && (
                  <span className="text-red-500">Image Url is required</span>
                )}

                <div className="flex justify-between my-3">
                  <p>Popular?</p>
                  <label htmlFor="popular">
                    <input
                      id="popular"
                      type="radio"
                      name="popularingOption"
                      checked
                      value={true}
                      {...register("IsPopular")}
                    />
                    <span className="mx-1">Yes</span>
                  </label>
                  <label htmlFor="popular">
                    <input
                      id="notPopular"
                      type="radio"
                      name="popularingOption"
                      value={false}
                      {...register("IsPopular")}
                    />
                    <span className="mx-1">No</span>
                  </label>
                </div>

                <div className="flex justify-between mb-8">
                  <p>Recommended?</p>
                  <label htmlFor="recommended">
                    <input
                      id="recommended"
                      type="radio"
                      name="recommendingOptions"
                      checked
                      value={true}
                      {...register("IsRecommended")}
                    />
                    <span className="mx-1">Yes</span>
                  </label>
                  <label htmlFor="notRecommended">
                    <input
                      id="notRecommended"
                      type="radio"
                      name="recommendingOptions"
                      value={false}
                      {...register("IsRecommended")}
                    />
                    <span className="mx-1">No</span>
                  </label>
                </div>
                <div className="flex justify-center my-3">
                  <button
                    type="submit"
                    className="text-white font-semibold bg-orange-400 w-full py-1 rounded-xl"
                  >
                    Add
                  </button>
                </div>
              </form>
            </Box>
          </Modal>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-5">
        {foods.map((food, i) => (
          <PopularItem key={i} food={food} />
        ))}
      </div>
    </div>
  );
}
