import About from "@/components/Home/About";
import Carousel from "@/components/Home/Carousel";
import Countup from "@/components/Home/Countup";
import Initiatives from "@/components/Home/Initiatives";
import JoinUs from "@/components/Home/JoinUs";

export const metadata = {
  title: "Bandhu Paribar | Home page",
  description: "Home page description",
};

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