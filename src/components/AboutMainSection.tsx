import AboutUsImg from "../assets/images/image 55.png";

export function AboutMainSection() {
  return (
    <div className="main-section ">
      <div className="lg:h-[50vh] overflow-hidden object-cover object-top">
      <img src={AboutUsImg}  alt="" />
      </div>
      <div className="p-5 grid gap-y-4">
        <h1 className="font-bold text-xl">
          Don't squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="">
          Our misssion is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch.
          <span className="">(Hitch costs extra 🙂)</span>
        </p>

        <p className="">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>

        <div className="bg-orange-300 p-5 rounded-sm ">
          <h1 className="font-bold">Your destination is waiting.</h1>
          <h1 className="font-bold pb-4">Your van is ready</h1>
          <button className="bg-gray-950 text-white font-bold rounded-lg p-3">
            Explore our vans
          </button>
        </div>
      </div>
    </div>
  );
}
