import { Footer } from "../components/Footer";
import { MainSection } from "../components/MainSection";
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
