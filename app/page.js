import About from "@/components/Home/About";
import Carousel from "@/components/Home/Carousel";
import Countup from "@/components/Home/Countup";
import JoinUs from "@/components/Home/JoinUs";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <JoinUs />
      <About />
      <Countup/>
    </div>
  );
};

export default HomePage;