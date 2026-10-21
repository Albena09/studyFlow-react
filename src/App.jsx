import Features from "./components/Features";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import SectionHeader from "./components/shared/SectionHeader";
import Stats from "./components/Stats";
import Study from "./components/Study";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Stats />
      <Study />
      <Features />
      <HowItWorks />
      {/* <SectionHeader /> */}
    </div>
  );
};

export default App;
