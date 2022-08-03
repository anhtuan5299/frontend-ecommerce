import React, { Fragment } from "react";
import {
  NavLink,
  useMatch,
  useResolvedPath,
  useNavigate,
} from "react-router-dom";
import { isAuthenticated, signout } from "../auth/helper/index";
import "../styles.css";

const currentTab = (match) => {
  if (match) {
    return { color: "#aaa0a0" };
  } else {
    return { color: "#2ecc72" };
  }
};

const CustomLink = ({ children, to, className }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return className !== null ? (
    <NavLink className={className} to={to}>
      {children}
    </NavLink>
  ) : (
    <NavLink to={to}>{children}</NavLink>
  );
};
const Menu = () => {
  let navigate = useNavigate();
  return (
    <div className="container-fluid">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li className="nav-item">
          <CustomLink to="/cart">Cart</CustomLink>
        </li>
        {isAuthenticated() && (
          <li className="nav-item">
            <CustomLink to="/user/dashboard">Dashboard</CustomLink>
          </li>
        )}
        {!isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
              <CustomLink to="/signup">Sign Up</CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/signin">Sign In</CustomLink>
            </li>
          </Fragment>
        )}
        {isAuthenticated() && (
          <li className="nav-item">
            <span
              className="nav-link text-warning"
              type="button"
              onClick={() => {
                signout(() => {
                  console.log("you signout");
                });
                navigate("/");
              }}
            >
              Sign Out
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
