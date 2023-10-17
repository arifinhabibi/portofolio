import React, { useEffect, useState } from "react";
import SidebarComponent from "../components/SidebarComponent";
import { Box } from "@mui/material";

function Homepage() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <SidebarComponent />
        <Box
          sx={{
            width: "80%",
            position: "absolute",
            left: "20%",
            padding: "10px 2rem",
            top: "10%",
          }}>
          <div className="header flex justify-center">
            <h1 className="text-5xl flex z-50 text-secondary">
              Hey, My Name Muhammad{" "}
              <span className="absolute mt-14"> Arifin Habibi</span>
            </h1>
            <img
              className="absolute h-60"
              width={680}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpPwfJjBy3_sct9dtRjFkNeiw4ZYjHsx_RdJi5ADH5Lbm1j1AmrPtNOhtotNzefPVdfY&usqp=CAU"
              alt="myphoto"
            />
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default Homepage;
