import React from "react";

const CommercePresenter = ({ onClickAlert }) => (
  <>
    <div id="E_commerce_01">
      <svg class="Background_hm">
        <rect
          fill="rgba(241,241,241,1)"
          id="Background_hm"
          rx="0"
          ry="0"
          x="0"
          y="0"
          width="1440"
          height="800"
        ></rect>
      </svg>
      <div id="Image_hn">
        <svg class="Mask_hr">
          <rect
            fill="rgba(255,255,255,1)"
            id="Mask_hr"
            rx="25"
            ry="25"
            x="0"
            y="0"
            width="540"
            height="640"
          ></rect>
        </svg>
        <div id="Image_hp">
          <rect fill="url(#Image_ju_pattern)" width="100%" height="100%"></rect>
          <pattern
            elementId="Image_ju"
            id="Image_ju_pattern"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <img
              alt="product"
              id="commerceZoom"
              src={require("../../images/commerce/product.svg")}
            />
          </pattern>
        </div>
      </div>
      <div id="Next_Product_hs">
        <div id="Image_ht">
          <svg class="Mask_hx">
            <rect
              fill="rgba(255,255,255,1)"
              id="Mask_hx"
              rx="20"
              ry="20"
              x="0"
              y="0"
              width="80"
              height="80"
            ></rect>
          </svg>
          <div id="Image_hv">
            <rect
              fill="url(#Image_jv_pattern)"
              width="100%"
              height="100%"
            ></rect>
            <pattern
              elementId="Image_jv"
              id="Image_jv_pattern"
              x="0"
              y="0"
              width="100%"
              height="100%"
            >
              <img
                alt="nextProduct"
                src={require("../../images/commerce/nextProduct.svg")}
              />
            </pattern>
          </div>
        </div>
        <div id="_1595">
          <span>$1595</span>
        </div>
        <div id="Easy_Squeeze_Sofa_Be">
          <span>Easy Squeeze Sofa Bed</span>
        </div>
      </div>
      <div
        id="Buttons_Large_Color_1_Solid_h"
        class="Buttons_Large_Color_1_Solid"
      >
        <div id="Buttons_Large_Color_1_Solid_ia">
          <svg class="Background_h">
            <rect
              fill="rgba(77,102,255,1)"
              id="Background_h"
              rx="15"
              ry="15"
              x="0"
              y="0"
              width="180"
              height="60"
            ></rect>
          </svg>
          <div
            id="Get_Started_h"
            style={{ cursor: "pointer" }}
            onClick={(e) => onClickAlert(e.target.innerText)}
          >
            <span>Add To Cart</span>
          </div>
        </div>
      </div>
      <div id="_1299">
        <span>$1299</span>
      </div>
      <div id="Text_h">
        <div id="This_is_a_big_one_an_h">
          <span>
            This is a big one and I consider one of the most important thing for
            a designer to get right.
          </span>
        </div>
        <div id="Furniture_Is_Art_Wit">
          <span>Furniture Is Art With An Attitude</span>
        </div>
      </div>
      <div id="Review">
        <div id="Avatars_Small" class="Avatars_Small">
          <img
            alt="avartar"
            id="Image_ia"
            src={require("../../images/commerce/Avatars-Small.svg")}
          />
        </div>
        <div id="More">
          <svg class="Background_ic">
            <ellipse
              fill="rgba(77,102,255,1)"
              id="Background_ic"
              rx="15"
              ry="15"
              cx="15"
              cy="15"
            ></ellipse>
          </svg>
          <div id="_5">
            <span>+5</span>
          </div>
        </div>
        <div id="Stars"></div>
      </div>
    </div>
  </>
);

export default CommercePresenter;
