import AboutUsImg from "../assets/images/tractor-2.jpg";

export function AboutMainSection() {
  return (
    <div className="main-section ">
      <div className="lg:h-[50vh] overflow-hidden object-cover object-bottom">
        <img src={AboutUsImg} alt="" />
      </div>
      <div className="p-5 grid gap-y-4">
        <h1 className="font-bold text-xl">
        Don't settle for cramped spaces; upgrade to the comfort of a tractor.
        </h1>
        <p className="">
          Our mission is to empower Tanzanian farmers with top-notch tractor
          rentals, breathing life into their agricultural journey. Each tractor
          is meticulously maintained, ensuring seamless farm plans with every
          use.
          <span className="">(Watch your crops flourish! 🌱)</span>
        </p>

        <p className="">
          Our team is comprised of passionate tractor enthusiasts who have
          experienced firsthand the transformative power of cultivating
          Tanzania's lands on wheels of innovation.
        </p>

        <div className="bg-dark-green p-5 rounded-md ">
          <h1 className="font-bold text-white">Your harvest awaits.</h1>
          <h1 className="font-bold text-white pb-4">Your tractor is ready.</h1>
          <button className="bg-goldenrod text-white font-bold rounded-lg p-3">
            Explore our Tractor
          </button>
        </div>
      </div>
    </div>
  );
}
