import React, { useEffect, useRef } from "react";
import videojs from "video.js";

function HeroSectionComponent(props) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;

  useEffect(() => {
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} className="mobile:h-full tablet:h-full" />
      <div className="absolute z-50 tablet:top-72  max-tablet:top-60 laptop:right-60 tablet:right-28 max-tablet:left-10 text-white">
        <span>Hi im</span>
        <h1 className="uppercase text-3xl">Muhamad Arifin Habibi</h1>
        <p className="w-80">A website developer from Indonesia</p>
        <button className="bg-primary my-10 py-4 px-5 max-tablet:px-4 max-tablet:py-2 max-tablet:text-sm max-tablet:my-5 rounded-md">
          Download my resume
        </button>
      </div>
    </div>
  );
}

export default HeroSectionComponent;
