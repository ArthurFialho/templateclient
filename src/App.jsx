import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { UpdateFollower } from "react-mouse-follower";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import BannerText from "./components/Banner/BannerText";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.8,
        }}
      >
        <NavBar />
        <Hero />
      </UpdateFollower>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "black",
          zIndex: 999,
          followSpeed: 1.8,
        }}
      >
        <Services />
        <Banner />
        <BannerText />
        <Blogs />
        <Footer />
      </UpdateFollower>
    </main>
  );
};

export default App;
