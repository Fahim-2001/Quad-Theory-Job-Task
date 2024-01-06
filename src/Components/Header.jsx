import Image1 from "../assets/Image1.png";
export default function Header() {
  return (
    <div>
      <div className="bg-orange-400 flex justify-evenly items-center mx-44 px-2 rounded-3xl">
        <div className="mx-16">
          <p className="text-4xl text-white font-extrabold text-left">
            Deliver Food To Your Door Step|
          </p>
          <p className="text-white text-xl mt-4 font-light text-slate-200">Authentic Food|, Quick Service, Fast Delivery.</p>
        </div>
        <img
          src={Image1}
          alt="A boy with foods, floating over his hand"
          className="h-64 mr-10"
        />
      </div>
    </div>
  );
}
