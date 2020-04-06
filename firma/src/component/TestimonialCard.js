import React from "react";

const TestimonialCard = ({ imageUrl, text, name, job, card }) => (
  <>
    <div id={`Review-${card + 1}`}>
      <svg className="reviewBackground">
        <rect
          fill="rgba(255,255,255,1)"
          stroke="rgba(232,232,232,1)"
          stroke-width="2px"
          stroke-linejoin="miter"
          stroke-linecap="butt"
          stroke-miterlimit="10"
          shape-rendering="auto"
          id="Background_i"
          rx="20"
          ry="20"
          x="0"
          y="0"
          width="445"
          height="308"
        ></rect>
      </svg>
      <div id="review_job">
        <span>{job}</span>
      </div>
      <div id="review_name">
        <span>{name}</span>
      </div>
      <div id="review_decs">
        <span>{text}</span>
      </div>

      <div id="avartar" className="Avatars_Medium">
        <img
          alt="avatar"
          id="Image_jc"
          src={require(`../images/testimonial/${imageUrl}`)}
        />
      </div>
    </div>
  </>
);

export default TestimonialCard;
