import React from "react";
import "./style.css";

function Home() {
  return (
    <div className="home-container">
      <video autoPlay muted loop id="background-video">
        <source src="background-video.mp4" type="video/mp4" />
      </video>
    <div className="overlay-text">
      <h1>Welcome to Animely</h1>
      <p>A place to discover new anime shows</p>
     <button>Discover</button>
    </div>
      
    </div>
  );
}

export default Home;
