import React from "react";

const Hero = ({ canvasRef }) => {
  return (
    <div className="hero-section" id="home">
      {" "}
      {/* Added id="home" */}
      <canvas id="waves-canvas" ref={canvasRef}></canvas>
      <div className="hero-overlay">
        <h1>PulseWave Tech</h1>
      </div>
    </div>
  );
};

export default Hero;
