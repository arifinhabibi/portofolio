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

  const redirectToDownload = () => {
    return window.open("https://resume-arifinhabibi.tiiny.site/", "_blank");
  };

  const connects = [
    {
      name: "github",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968896.png",
      url: "https://github.com/arifinhabibi",
    },
    {
      name: "tiktok",
      image:
        "https://img.freepik.com/premium-vector/tik-tok-logo_578229-290.jpg",
      url: "https://www.tiktok.com/@arifinhabibi_",
    },
    {
      name: "linkedin",
      image:
        "https://img.freepik.com/premium-vector/linkedin-logo_578229-227.jpg",
      url: "https://www.linkedin.com/in/muhammad-arifin-habibi-4a7572215/",
    },
    {
      name: "instagram",
      image:
        "https://img.freepik.com/premium-vector/instagram-app-icon-social-media-logo-vector-illustration_277909-403.jpg?w=2000",
      url: "https://www.instagram.com/arifinhabibi_",
    },
  ];

  return (
    <div data-vjs-player>
      <div ref={videoRef} className="mobile:h-full tablet:h-full" />
      <div className="absolute z-50 tablet:top-72  max-tablet:top-60 laptop:right-60 tablet:right-28 max-tablet:left-10 text-white">
        <span>Hi i'm</span>
        <h1 className="uppercase text-3xl">Muhammad Arifin Habibi</h1>
        <p className="w-80">A website developer from Indonesia</p>
        <button
          onClick={redirectToDownload}
          className="bg-primary my-4 py-4 px-5 max-tablet:px-5 max-tablet:py-3 max-tablet:text-sm max-tablet:my-5 rounded-md capitalize">
          Download my resume
        </button>
        <p className="mb-2">Connect with me</p>
        <div className="flex">
          {connects.map((connect) => (
            <a href={connect.url}>
              <img
                src={connect.image}
                className="w-10 h-10 mx-2 bg-white p-1 rounded-full"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSectionComponent;
