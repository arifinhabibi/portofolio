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
      <nav className="flex justify-end px-10 py-10 items-center w-full absolute top-0 z-50 max-tablet:hidden bg-secondary">
        <div className="flex items-center laptop:gap-2 tablet:gap-1 capitalize text-light nav">
          <li className="list-none">
            <NavLink exact to={"/"} activeClassName="active">
              home
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to={
                "https://www.linkedin.com/in/arifinhabibi/details/experience/"
              }
              activeClassName="active">
              experiences
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to={"https://github.com/arifinhabibi?tab=repositories"}
              activeClassName="active">
              projects
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to={"https://www.linkedin.com/in/arifinhabibi/details/education/"}
              activeClassName="active">
              educations
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to={
                "https://www.linkedin.com/in/arifinhabibi/details/certifications/"
              }
              activeClassName="active">
              certificates
            </NavLink>
          </li>
          {/* <li className="list-none select-none text-4xl font-extralight">|</li> */}
          {/* <li className="list-none">
            <button
              className="bg-body px-6 py-3 font-semibold text-dark rounded capitalize"
              onClick={toContactPage}>
              let's hire me
            </button>
          </li> */}
        </div>
      </nav>

      <div className="z-40 tablet:hidden">
        <DehazeIcon className="text-white absolute right-0 m-5 w-48 h-48" />
      </div>
    </div>
  );
}

export default HeaderComponent;
