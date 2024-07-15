import React, { useEffect, useRef } from "react";
import HeaderComponent from "../components/HeaderComponent";
import HeroSectionComponent from "../components/HeroSectionComponent";
function HomePageView() {
  return (
    <div className="homepage">
      <HeaderComponent />
      {/* hero section */}
      <HeroSectionComponent />
    </div>
  );
}

export default HomePageView;
