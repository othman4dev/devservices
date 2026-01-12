import React from "react";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  useTheme();

  // Check if we're on the thank you page
  const isThankYouPage =
    window.location.pathname === "/thank-you" ||
    window.location.hash === "#thank-you";

  if (isThankYouPage) {
    return (
      <div className="app">
        <ThankYou />
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <Checkout />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
