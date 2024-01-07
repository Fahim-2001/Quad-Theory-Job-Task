import Image1 from "../assets/Image1.png";
export default function Header() {
  return (
    <div className="mt-20 mb-16 mx-3 md:mx-20 lg:mx-40">
      <div className="lg:bg-amber-500 flex flex-col justify-center lg:flex-row lg:justify-evenly items-center px-2 rounded-3xl">
        <div className="text-center lg:text-left lg:px-24">
          <p className="text-2xl lg:text-4xl text-black lg:text-white font-extrabold ">
            Deliver Food To Your Door Step|
          </p>
          <p className="text-gray-600 lg:text-slate-200 text-md lg:text-xl mt-4 font-light ">
            Authentic Food|, Quick Service, Fast Delivery.
          </p>
        </div>
        <div className="lg:hidden bg-orange-400 md:bg-transparent flex justify-center rounded-3xl mt-20 lg:mt-0 px-44 py-28"></div>
        <img
          src={Image1}
          alt="A boy with foods, floating over his hand"
          className="h-72 lg:h-64 mx-10 lg:mx-0 lg:mr-16 mt-[-288px] lg:mt-0"
        />
      </div>
    </div>
  );
}
