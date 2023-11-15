import React, { useEffect, useRef } from "react";
import HeaderComponent from "../components/HeaderComponent";
import HeroSectionComponent from "../components/HeroSectionComponent";
import videojs from "video.js";

function HomePageView() {
  const playerRef = useRef(null);
  const videoJsOptions = {
    autoplay: "play",
    loop: true,
    controls: false,
    muted: true,
    responsive: false,
    preload: "auto",
    height: 700,
    fluid: false,
    sources: [
      {
        src: "videos/bg_program.mp4",
        type: "video/mp4",
      },
    ],
    breakpoints: {
      tiny: 300,
      xsmall: 400,
      small: 500,
      medium: 600,
      large: 600,
      xlarge: 600,
      huge: 600,
    },
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <div>
      <HeaderComponent />
      {/* hero section */}
      <HeroSectionComponent
        options={videoJsOptions}
        onReady={handlePlayerReady}
      />
    </div>
  );
}

export default HomePageView;
