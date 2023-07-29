import heroImage from "../assets/images/image 53.png";

export function MainSection() {
  return (
    <div className="h-[77.4vh] overflow-hidden relative">
      <div className="h-full w-full bg-black opacity-30 absolute z-10 top-0"></div>
      <img
        src={heroImage}
        alt=""
        className="w-full h-full object-cover object-top absolute z-0 top-0"
      />
      <div className=" px-5 py-20 relative z-10 h-full m-auto grid gap-y-4">
        <h1 className="text-white lg:text-center text-[min(10vw,80px)] font-bold">
          You got the travel plans, we got the travel vans
        </h1>
        <p className="text-white font-semibold lg:text-center lg:text-xl lg:max-w-2xl lg:m-auto">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button className="text-white font-semibold w-full lg:w-fit h-10 rounded-md bg-orange-500 lg:px-5 lg:m-auto">
          Find your van
        </button>
      </div>
    </div>
  );
}
