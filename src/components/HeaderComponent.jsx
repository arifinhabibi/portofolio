import React from "react";
import { NavLink } from "react-router-dom";

function HeaderComponent() {
  return (
    <div>
      <nav className="flex justify-between px-10 h-20 items-center w-full">
        <h1>Welcome!</h1>

        <div className="flex items-center laptop:gap-3 tablet:gap-2 capitalize text-light nav">
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
            <a href="">projects</a>
          </li>
          <li className="list-none">
            <a href="">educations</a>
          </li>
          <li className="list-none">
            <a href="">certificates</a>
          </li>
          {/* <li className="list-none select-none text-4xl font-extralight">|</li> */}
          {/* <li className="list-none">
            <button className="bg-body px-6 py-3 font-semibold text-dark rounded capitalize">
              let's hire me
            </button>
          </li> */}
        </div>
      </nav>
    </div>
  );
}

export default HeaderComponent;
