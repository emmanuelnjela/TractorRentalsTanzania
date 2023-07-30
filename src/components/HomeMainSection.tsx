import heroImage from "../assets/images/tractor-1.jpg";

export function MainSection() {
  return (
    <div className="h-[77.4vh] overflow-hidden relative">
      <div className="h-full w-full bg-black opacity-30 absolute z-10 top-0"></div>
      <img
        src={heroImage}
        alt=""
        className="w-full h-full object-cover object-center absolute z-0 top-0"
      />
      <div className=" px-5 py-[5vw] relative z-10 h-full m-auto grid gap-y-4">
        <h1 className="text-white lg:text-center text-[min(10vw,80px)] font-bold leading-snug">
        Your Fields, Our Tractors, Let's Cultivate Together!
        </h1>
        <p className="text-white font-semibold lg:text-center lg:text-xl lg:max-w-2xl lg:m-auto">
        Fuel Growth in Your Fields with Our Reliable Tractors. Cultivate Success, Together!
        </p>
        <button className="text-white font-semibold w-full lg:w-fit h-10 rounded-md bg-goldenrod lg:px-5 lg:m-auto">
          Find your tractor
        </button>
      </div>
    </div>
  );
}
