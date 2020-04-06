import React from "react";
import { Slide } from "react-slideshow-image";
import TestimonialCard from "../../component/TestimonialCard";

const properties = {
  duration: 5000,
  transitionDuration: 800,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const TestimonialPresenter = ({ reviews }) => (
  <>
    <div id="Testimonial_09">
      <svg className="Background_ig">
        <rect
          fill="rgba(77,102,255,1)"
          id="Background_ig"
          rx="0"
          ry="0"
          x="0"
          y="0"
          width="1440"
          height="900"
        ></rect>
      </svg>
      <div className="slide-container">
        <Slide {...properties}>
          {reviews.map((review, index) => (
            <div className="each-slide">
              <TestimonialCard
                imageUrl={`${review.imageUrl}`}
                text={`${review.text}`}
                name={`${review.name}`}
                job={`${review.job}`}
                card={index}
              />
            </div>
          ))}
        </Slide>
      </div>
      <div id="Slider_Arrows_jd" className="Slider_Arrows"></div>
      <div id="Text_je">
        <div id="Only_those_who_risk_jf">
          <span>
            Only those who risk going too far can possibly find out how far one
            can go.
          </span>
        </div>
        <div id="We_Are_Loved_By_User">
          <span>We Are Loved By Users And Clients Worldwide</span>
        </div>
      </div>
    </div>
  </>
);

export default TestimonialPresenter;
