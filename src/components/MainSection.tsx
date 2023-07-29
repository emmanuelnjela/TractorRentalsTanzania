import heroImage from "../assets/images/image 53.png";

export function MainSection() {
  return (
    <div className="hero-section overflow-hidden relative">
      <div className="h-full w-full bg-black opacity-30 absolute z-10 top-0"></div>
      <img
        src={heroImage}
        alt=""
        className="w-full h-full object-cover object-top absolute z-0 top-0"
      />
      <div className="max-w-screen-sm px-5 py-20 relative z-10 h-full grid content-between justify-center m-auto">
        <h1 className="text-white text-5xl font-bold">
          You got the travel plans, we got the travel vans
        </h1>
        <p className="text-white font-semibold">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button className="text-white font-semibold w-full h-10 rounded-md bg-orange-500">
          Find your van
        </button>
      </div>
    </div>
  );
}
