import React from "react";
import "../styles/headerStyles.css";
import { useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  function callLogoutFunction() {
    setIsLoggedIn(false);
    navigate("/authenticate");
  }
  function navigateToAuthPage() {
    navigate("/authenticate");
  }

  return (
    <div className="navBarContainer">
      <div className="navElement navLeft"></div>
      <div className="navElement navCenter">
        Deep-<span className="navCenterRight">Code-Editor</span>
      </div>
      <div className="navElement navRight">
        {isLoggedIn ? (
          <div className="authButtons" onClick={callLogoutFunction}>
            Logout
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
