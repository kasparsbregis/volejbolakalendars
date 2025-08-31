import About from "./components/About";
// import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import Team from "./components/Team";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      {/* <Team /> */}
      {/* <Footer /> */}
    </div>
  );
}
