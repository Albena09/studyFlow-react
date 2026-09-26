import Feathers from "./components/Feathers";
import Hero from "./components/Hero";
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
      <Feathers />
      {/* <SectionHeader /> */}

    </div>
  );
};

export default App;
