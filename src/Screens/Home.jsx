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
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="story">
          <Story />
        </section>
        <section id="trust">
          <Trust />
        </section>
        <section id="choose">
          <Choose modal={modal} setModal={setModal} />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
