import React from "react";

const ContentPresenter = () => (
  <>
    <div id="Content_01">
      <svg className="Background_eg">
        <rect
          fill="rgba(241,241,241,1)"
          id="Background_eg"
          rx="0"
          ry="0"
          x="0"
          y="0"
          width="1440"
          height="800"
        ></rect>
      </svg>
      <div id="Image_eh">
        <svg className="Mask_el">
          <rect
            fill="rgba(216,216,216,1)"
            id="Mask_el"
            rx="25"
            ry="25"
            x="0"
            y="0"
            width="445"
            height="640"
          ></rect>
        </svg>
        <div id="Image_ej">
          <svg>
            <rect
              fill="url(#Image_jq_pattern)"
              width="100%"
              height="100%"
            ></rect>
            <pattern
              elementId="Image_jq"
              id="Image_jq_pattern"
              x="0"
              y="0"
              width="100%"
              height="100%"
            >
              {/* <image
                x="0"
                y="0"
                width="100%"
                height="100%"
                href="Image_jq_pattern.png"
                xlink:href="Image_jq_pattern.png"
              ></image> */}
            </pattern>
          </svg>
        </div>
      </div>
      <div
        id="Buttons_Large_Color_1_Solid"
        className="Buttons_Large_Color_1_Solid"
      >
        <div id="Buttons_Large_Color_1_Solid_en">
          <svg className="Background_eo">
            <rect
              fill="rgba(77,102,255,1)"
              id="Background_eo"
              rx="15"
              ry="15"
              x="0"
              y="0"
              width="180"
              height="60"
            ></rect>
          </svg>
          <div id="Get_Started">
            <span>Get Started</span>
          </div>
        </div>
      </div>
      <div id="Text_3">
        <div id="Better_a_diamond_wit">
          <span>Better a diamond with a flaw than a pebble without one.</span>
        </div>
        <div id="Find_Your_Brand_s_Vo">
          <span>Find Your Brand's Voice</span>
        </div>
      </div>
      <div id="Text_2">
        <div id="Life_isn_t_about_fin">
          <span>
            Life isn't about finding yourself, it’s about creating yourself.
          </span>
        </div>
        <div id="Ideas_That_Provoke">
          <span>Ideas That Provoke</span>
        </div>
      </div>
      <div id="Text_1">
        <div id="This_is_a_big_one_an_ex">
          <span>
            This is a big one and I consider one of the most important, and
            difficult, things for designer to get right.
          </span>
        </div>
        <div id="Building_Brands_With">
          <span>Building Brands With Purpose And Passion</span>
        </div>
      </div>
    </div>
  </>
);

export default ContentPresenter;
