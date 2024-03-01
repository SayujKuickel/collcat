import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ITSolutions from "./components/ITSolutions";
import FormSection from "./components/FormSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="font-serif">
      <NavBar />
      <HeroSection />
      <ITSolutions />
      <FormSection />
      <Footer />
    </main>
  );
}
