import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function HeroSectionComponent() {
  const handleDownload = () => {
    const downloadUrl = "/upload/profile.pdf";
    window.open(downloadUrl, "resizeable,scrollbar");
  };

  return (
    <div className="flex justify-between items-end px-28 max-mobile:px-7 max-mobile:relative max-mobile:h-screen absolute bottom-0  bg-secondary">
      <div className="w-2/3 max-mobile:w-full py-10 z-10">
        <h1 className="text-3xl font-semibold">Welcome to My Portfolio!</h1>
        <h1 className="text-4xl font-bold my-5">Muhammad Arifin Habibi</h1>
        <p className="text-lg">
          I'm a software engineer with a passion for technology and design. I'm
          currently looking for new opportunities to grow my skills and
          contribute to the tech community.
        </p>
        <div className="flex gap-5 items-center max-mobile:flex-col max-mobile:py-10">
          <button className="border-4 px-8 py-4 my-10" onClick={handleDownload}>
            Resume
          </button>
          <span className="text-6xl text-white font-thin">|</span>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/arifinhabibi"
              className=""
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="w-10 h-10 user-select-none"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
                alt="linked"
              />
            </a>
            <a
              href="https://www.github.com/arifinhabibi"
              className=""
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="w-10 h-10 user-select-none"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
                alt="linked"
              />
            </a>
            <a
              href="https://www.instagram.com/arifinhabibi_"
              className=""
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="w-10 h-10 user-select-none"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/600px-Instagram_logo_2022.png"
                alt="linked"
              />
            </a>
            <a
              href="https://wa.me/+6285882529291"
              className=""
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="w-10 h-10 user-select-none"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/50px-WhatsApp_logo-color-vertical.png"
                alt="linked"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="z-50">
        <div>
          <img
            className="h-auto mx-auto max-mobile:hidden"
            src="/image/dark.png"
          />
        </div>
      </div>
      <div className="rotated-square max-laptop:hidden"></div>
    </div>
  );
}

export default HeroSectionComponent;
