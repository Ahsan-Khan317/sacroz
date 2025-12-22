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
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Facere numquam eveniet similique.
      </p>
    </div>
  );
};

export default Home;
