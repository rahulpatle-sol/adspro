"use client";
import Image from "next/image";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Services from "./services/page";
import About from "./about/page";

export default function Home() {
  return (
    <>
    
    <Hero/>
  <Services/>
  <About/>
    </>
  );
}
