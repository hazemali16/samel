"use client"
import { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Order from "./components/Order";
import Products from "./components/Products";
import Services from "./components/Services";

export default function Home() {
  useEffect(() => {
    let services = document.querySelector("#services");
    let products = document.querySelector("#products");
    let order = document.querySelector("#order").parentElement;
    window.onscroll = () => {
      if (window.scrollY >= services.offsetTop - 500) {
        services.classList.remove("opacity-0");
        services.classList.remove("translate-y-10");
      }
      if (window.scrollY >= products.offsetTop - 500) {
        products.classList.remove("opacity-0");
        products.classList.remove("translate-y-10");
      }
      if (window.scrollY >= order.offsetTop - 500) {
        order.classList.remove("opacity-0");
        order.classList.remove("translate-y-10");
      }
    }
  }, [])
  return (
    <div>
      <NavBar />
      <Hero />
      <Products />
      <Order />
      <Services />
      <Footer />
    </div>
  );
}
