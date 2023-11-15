import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useNavigate } from "react-router-dom";

function HeaderComponent() {
  const navigate = useNavigate();

  const toContactPage = () => {
    navigate("/contacts");
  };

  return (
    <div>
      <nav className="flex justify-between px-10 h-20 items-center w-full absolute top-0 z-50 max-tablet:hidden">
        <h1 className="text-white">Welcome!</h1>

        <div className="flex items-center laptop:gap-2 tablet:gap-1 capitalize text-light nav">
          <li className="list-none">
            <NavLink exact to={"/"} activeClassName="active">
              home
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to={"/experiences"} activeClassName="active">
              experiences
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to={"/projects"} activeClassName="active">
              projects
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to={"/educations"} activeClassName="active">
              educations
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to={"/certificates"} activeClassName="active">
              certificates
            </NavLink>
          </li>
          <li className="list-none select-none text-4xl font-extralight">|</li>
          <li className="list-none">
            <button
              className="bg-body px-6 py-3 font-semibold text-dark rounded capitalize"
              onClick={toContactPage}>
              let's hire me
            </button>
          </li>
        </div>
      </nav>

      <div className="z-40 tablet:hidden">
        <DehazeIcon className="text-white absolute" />
      </div>
    </div>
  );
}

export default HeaderComponent;
