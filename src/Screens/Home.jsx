import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import Story from "../Components/Story";
import Footer from "../Components/Footer";
import Trust from "../Components/Trust";
import Choose from "../Components/Choose";
import { useState } from "react";
import Modal from "../Components/Modal";

const Home = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="relative">
      {modal && (
        <div className="absolute w-full h-screen  z-[2000]">
          <Modal modal={modal} setModal={setModal} />
        </div>
      )}
      <div className="absolute w-full">
        <Navbar modal={modal} setModal={setModal} />
        <Hero />
        <Services />
        <Story />
        <Trust />
        <Choose />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
