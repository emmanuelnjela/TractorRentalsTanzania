import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { AboutMainSection } from "../components/AboutMainSection";

function AboutPage() {
  return (
    <div className="about-us">
      <NavBar />
      <AboutMainSection />
      <Footer />
    </div>
  );
}

export default AboutPage;

