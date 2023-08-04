import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import Story from "../Components/Story";
import Footer from "../Components/Footer";
import Trust from "../Components/Trust";
import Choose from "../Components/Choose";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Story />
      <Trust />
      <Choose />
      <Footer />
    </div>
  );
};

export default Home;
