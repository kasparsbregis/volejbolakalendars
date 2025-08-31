import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <CTA />
      <Newsletter />
      {/* <Team /> */}
      <Footer />
    </div>
  );
}
