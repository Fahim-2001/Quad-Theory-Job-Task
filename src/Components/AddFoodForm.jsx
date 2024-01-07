import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import generateUniqueId from "../utils/generateUniqueId";
import { addFood } from "../redux/slices/foodSlice";
import { Box, Modal } from "@mui/material";

export default function AddFoodForm({open,handleClose}) {
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
  return (
    <div>
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
              <span className="text-red-500 text-sm">Name is required</span>
            )}

            <input
              type="number"
              className="my-3 p-1"
              placeholder="Enter food price here"
              {...register("Price", { required: true })}
            />
            {errors.Price && (
              <span className="text-red-500 text-sm">Price is required</span>
            )}

            <input
              type="text"
              className="my-3 p-1"
              placeholder="Enter image url here"
              {...register("ImageUrl", { required: true })}
            />
            {errors.ImageUrl && (
              <span className="text-red-500 text-sm">Image Url is required</span>
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
  );
}
