import React, { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MissionStatement from "./components/MissionStatement";
import * as SineWaves from "sine-waves";
import "./App.css";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import BackToTop from "./components/BackToTop";

// or if the default import doesn't work

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const waves = new SineWaves({
      el: canvasRef.current,
      speed: 5,
      width: function () {
        return window.innerWidth;
      },
      height: function () {
        return window.innerHeight;
      },
      wavesWidth: "95%",
      ease: "SineInOut",
      waves: [
        {
          timeModifier: 4,
          lineWidth: 1,
          amplitude: -25,
          wavelength: 25,
        },
        {
          timeModifier: 2,
          lineWidth: 2,
          amplitude: -50,
          wavelength: 50,
        },
        {
          timeModifier: 1,
          lineWidth: 3,
          amplitude: -100,
          wavelength: 100,
        },
        {
          timeModifier: 0.5,
          lineWidth: 1,
          amplitude: -200,
          wavelength: 200,
        },
        {
          timeModifier: 0.25,
          lineWidth: 5,
          amplitude: -400,
          wavelength: 400,
        },
      ],
      // Resize canvas on window resize
      resizeEvent: function () {
        const gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
        gradient.addColorStop(0, "rgba(23, 210, 168, 0.2)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.5)");
        gradient.addColorStop(1, "rgba(23, 210, 168, 0.2)");
        const index = Math.floor(Math.random() * this.waves.length);
        this.waves[index].strokeStyle = gradient;
      },
    });

    // Cleanup on unmount
    return () => (waves.running = false);
  }, []);

  return (
    <>
      <Navbar />
      <Hero canvasRef={canvasRef} />
      <MissionStatement />
      <ContactUs />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
