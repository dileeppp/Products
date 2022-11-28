import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

const NavBar = () => {
  const navStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "none",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  const auth = useAuth()
  return (
    <nav>
      <NavLink style={navStyle} to="/">
        Home
      </NavLink>
      <NavLink style={navStyle} to="about">
        About
      </NavLink>
      <NavLink style={navStyle} to="products">
        Products
      </NavLink>
      <NavLink style={navStyle} to="profile">
        Profile
      </NavLink>
      {
        !auth.user && (
          <NavLink style={navStyle} to="login">
        Login
      </NavLink>
        )
      }
    </nav>
  );
};

export default NavBar;
