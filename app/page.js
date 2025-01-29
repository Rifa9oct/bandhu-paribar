import About from "@/components/Home/About";
import Carousel from "@/components/Home/Carousel";
import Countup from "@/components/Home/Countup";
import Initiatives from "@/components/Home/Initiatives";
import JoinUs from "@/components/Home/JoinUs";

const HomePage = () => {
 
  return (
    <div>
      <Carousel />
      <JoinUs />
      <About />
      <Countup/>
      <Initiatives/>
    </div>
  );
};

export default HomePage;