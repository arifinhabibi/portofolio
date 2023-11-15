import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function EducationPageView() {
  const navigate = useNavigate();
  useEffect(() => {
    alert("sorry this website still on development");
    navigate("/");
  }, []);
  return (
    <div>
      <HeaderComponent />
    </div>
  );
}

export default EducationPageView;
