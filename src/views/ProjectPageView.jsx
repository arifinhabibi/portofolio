import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProjectPageView() {
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

export default ProjectPageView;
