import About from "@/components/Home/About";
import Carousel from "@/components/Home/Carousel";
import JoinUs from "@/components/Home/JoinUs";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <JoinUs />
      <About />
    </div>
  );
};

export default HomePage;