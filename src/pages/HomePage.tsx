import { Footer } from "../components/Footer";
import { MainSection } from "../components/HomeMainSection";
import { NavBar } from "../components/NavBar";

function HomePage() {
  return (
    <div className="home-page">
      <NavBar />
      <MainSection />
      <Footer />
    </div>
  );
}

export default HomePage;
