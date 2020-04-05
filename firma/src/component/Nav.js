import React from "react";

const Nav = ({ onClickAlert }) => (
  <div id="Nav_Bar">
    <svg className="Background_fp">
      <rect
        fill="rgba(77,102,255,1)"
        id="Background_fp"
        rx="0"
        ry="0"
        x="0"
        y="0"
        width="1440"
        height="100"
      ></rect>
    </svg>
    <div
      id="Buttons_Small_Color_2_Solid"
      className="Buttons_Small_Color_2_Solid"
    >
      <div id="Buttons_Small_Color_2_Solid_fr">
        <svg className="Background_fs">
          <rect
            fill="rgba(255,169,0,1)"
            id="Background_fs"
            rx="15"
            ry="15"
            x="0"
            y="0"
            width="120"
            height="50"
          ></rect>
        </svg>
        <div
          id="Log_In"
          style={{ cursor: "pointer" }}
          onClick={(e) => onClickAlert(e.target.innerText)}
        >
          <span>Sign Up</span>
        </div>
      </div>
    </div>
    <div id="Log_In_fu">
      <p>Log In</p>
    </div>
    <div id="Contact_fv">
      <p>Contact</p>
    </div>
    <div id="Services">
      <p>Services</p>
    </div>
    <div id="Work">
      <p>Work</p>
    </div>
    <div id="Explore">
      <p>Explore</p>
    </div>
    <div id="kraft8">
      <span>kraft8</span>
    </div>
  </div>
);

export default Nav;
