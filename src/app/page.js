

import Image from "next/image";
import Button from "@/components/Navbar";
import Hero from "@/components/AboutUs";
import WhoWeAre from "@/components/Hero";
import GallerySwiper from "@/components/Gallery";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import ChatBot from "@/components/Chatbot";

export default function Home() {
  return (
    <div className="relative">
      {/* Navbar with fixed positioning to stay visible on scroll */}
      <div className="fixed top-0 left-[305px] w-full z-10" >
        <Button />
      </div>
      
      {/* Hero section that extends full height */}
      <div id = "home">
        <Hero />
      </div>
      <div id="about">
        <WhoWeAre />
      </div>
      <div id = "team">
        <Team />
      </div>
      <div id="gallery">
        <GallerySwiper />
      </div>
      <div >
        <Footer />
      </div>
      <ChatBot />
    </div>
  );
}