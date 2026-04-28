import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/about";
import Blog from "./components/blog";
import Booking from "./components/booking";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Hero from "./components/hero";
import Masterclass from "./components/masterclass";
import Nav from "./components/navbar";
import BlogPost from "./components/blog-post";

function Home({ scrolled }: { scrolled: boolean }) {
  return (
    <div className="bg-[#0A0A0A] text-[#F0EDE6] font-body overflow-x-hidden">
      <Nav scrolled={scrolled} />
      <Hero />
      <About />
      <Masterclass />
      <Gallery />
      <Blog />
      <Booking />
      <Footer />
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home scrolled={scrolled} />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
}