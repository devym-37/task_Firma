import React from "react";
import Nav from "component/Nav";

const LandingPagePresenter = () => (
  <>
    <div id="Header_01">
      <svg class="Background_e">
        <rect
          fill="rgba(241,241,241,1)"
          id="Background_e"
          rx="0"
          ry="0"
          x="0"
          y="0"
          width="1440"
          height="900"
        ></rect>
      </svg>
      <div id="Slider_Arrows" class="Slider_Arrows"></div>
      <div id="Next_Product">
        <svg class="Background_fa">
          <rect
            fill="rgba(255,169,0,1)"
            id="Background_fa"
            rx="20"
            ry="20"
            x="0"
            y="0"
            width="80"
            height="80"
          ></rect>
        </svg>
        {/* <img id="image_e" src="image_e.png" srcset="image_e.png 1x, image_e@2x.png 2x"/> */}
        <div id="icons_plus" class="icons_plus">
          <svg class="plus" viewBox="0 0 22 22">
            <path
              fill="rgba(103,103,103,1)"
              id="plus"
              d="M 21.08333396911621 9.166666984558105 L 12.83333301544189 9.166666984558105 L 12.83333301544189 0.9166666865348816 C 12.83333301544189 0.4102083444595337 12.42312526702881 0 11.91666698455811 0 L 10.08333301544189 0 C 9.576874732971191 0 9.166666984558105 0.4102083444595337 9.166666984558105 0.9166666865348816 L 9.166666984558105 9.166666984558105 L 0.9166666865348816 9.166666984558105 C 0.4102083444595337 9.166666984558105 0 9.576874732971191 0 10.08333301544189 L 0 11.91666698455811 C 0 12.42312526702881 0.4102083444595337 12.83333301544189 0.9166666865348816 12.83333301544189 L 9.166666984558105 12.83333301544189 L 9.166666984558105 21.08333396911621 C 9.166666984558105 21.58979225158691 9.576874732971191 22 10.08333301544189 22 L 11.91666698455811 22 C 12.42312526702881 22 12.83333301544189 21.58979225158691 12.83333301544189 21.08333396911621 L 12.83333301544189 12.83333301544189 L 21.08333396911621 12.83333301544189 C 21.58979225158691 12.83333301544189 22 12.42312526702881 22 11.91666698455811 L 22 10.08333301544189 C 22 9.576874732971191 21.58979225158691 9.166666984558105 21.08333396911621 9.166666984558105 Z"
            ></path>
          </svg>
        </div>
        <div id="Text_e">
          <div id="_225">
            <span>$225</span>
          </div>
          <div id="Air_Jordan_6_Retro">
            <span>Air Jordan 6 Retro</span>
          </div>
        </div>
      </div>
      <div id="Product_Image">
        {/* <img id="Image_fb" src="Image_fb.png" srcset="Image_fb.png 1x, Image_fb@2x.png 2x" />
			<img id="Image_fc" src="Image_fc.png" srcset="Image_fc.png 1x, Image_fc@2x.png 2x"/>
			<img id="image_fd" src="image_fd.png" srcset="image_fd.png 1x, image_fd@2x.png 2x"/> */}
        <svg class="Background_fe">
          <ellipse
            fill="rgba(77,102,255,1)"
            id="Background_fe"
            rx="270"
            ry="270"
            cx="270"
            cy="270"
          ></ellipse>
        </svg>
        {/* <img id="Image_ff" src="Image_ff.png" srcset="Image_ff.png 1x, Image_ff@2x.png 2x"/> */}
      </div>
      <div
        id="Buttons_Large_Color_1_Solid_fg"
        class="Buttons_Large_Color_1_Solid"
      >
        <div id="Buttons_Large_Color_1_Solid_fh">
          <svg class="Background_fi">
            <rect
              fill="rgba(77,102,255,1)"
              id="Background_fi"
              rx="15"
              ry="15"
              x="0"
              y="0"
              width="180"
              height="60"
            ></rect>
          </svg>
          <div id="Get_Started_fj">
            <span>Add To Cart</span>
          </div>
        </div>
      </div>
      <div id="Text_fk">
        <div id="_180">
          <span>$180</span>
        </div>
        <div id="Nike_Joyride_Run_Fly">
          <span>Nike Joyride Run Flyknit</span>
        </div>
        <div id="Men_s_Running_Shoe">
          <span>Men's Running Shoe</span>
        </div>
      </div>
      <Nav />
    </div>
  </>
);

export default LandingPagePresenter;
