import ImageSlider from "../components/slider.jsx";
import CatalogueDetails from "../components/catalogue.jsx";
import All from "../components/all.jsx"
import Video from "../components/video.jsx"
import Testimonials from "../components/text.jsx"
const Home = () => {
      const images = [
        "https://www.sacrozindustries.com/slide-1.jpg",
        "https://www.sacrozindustries.com/slide-2.jpg",
        "https://www.sacrozindustries.com/slide-3.jpg",
        "https://www.sacrozindustries.com/slide-4.jpg",
        "https://www.sacrozindustries.com/slide-5.jpg",
      ];
  return (
    <div className="p-2 ">
        <ImageSlider image={[...images]} />
        <All />
        <Video />
        <CatalogueDetails />
        <Testimonials />
      
    </div>
  );
};

export default Home;
