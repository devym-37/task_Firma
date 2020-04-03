import React from "react";

const PortfolioPresenter = () => (
  <>
    <div id="Portfolio_01">
      <svg className="Background_g">
        <rect
          fill="rgba(255,255,255,1)"
          id="Background_g"
          rx="0"
          ry="0"
          x="0"
          y="0"
          width="1440"
          height="908"
        ></rect>
      </svg>
      <div id="Mockup">
        <svg className="Background_ha">
          <ellipse
            fill="rgba(77,102,255,1)"
            id="Background_ha"
            rx="240"
            ry="240"
            cx="240"
            cy="240"
          ></ellipse>
        </svg>
        {/* <img id="Image_2" src="Image_2.png" srcset="Image_2.png 1x, Image_2@2x.png 2x"/>
			<img id="Image_1" src="Image_1.png" srcset="Image_1.png 1x, Image_1@2x.png 2x"/> */}
      </div>
      <div
        id="Buttons_Large_Color_1_Solid_hb"
        className="Buttons_Large_Color_1_Solid"
      >
        <div id="Buttons_Large_Color_1_Solid_hc">
          <svg className="Background_hd">
            <rect
              fill="rgba(77,102,255,1)"
              id="Background_hd"
              rx="15"
              ry="15"
              x="0"
              y="0"
              width="180"
              height="60"
            ></rect>
          </svg>
          <div id="Get_Started_he">
            <span>View Case Study</span>
          </div>
        </div>
      </div>
      <div id="Text_2_hf">
        <div id="Only_those_who_risk_hg">
          <span>
            Only those who risk going too far can possibly find out how far one
            can go.
          </span>
        </div>
        <div id="Building_Brands_With_hh">
          <span>Building Brands With Purpose And Passion</span>
        </div>
      </div>
      <div id="Text_1_hi">
        <div id="Creating_Results">
          <span>Creating Results</span>
        </div>
        <div id="portfolio">
          <span>portfolio</span>
        </div>
      </div>
    </div>
  </>
);

export default PortfolioPresenter;
