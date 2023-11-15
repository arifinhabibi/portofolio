import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ExperiencePageView() {
  const navigate = useNavigate();

  useEffect(() => {
    alert("sorry this website still on development");
    navigate("/");
  }, []);

  return (
    <div>
      <HeaderComponent />
      <div className="container mx-auto mt-24">
        <h1 className="text-2xl my-10 font-semibold text-center">
          Experiences
        </h1>
      </div>
    </div>
  );
}

export default ExperiencePageView;
