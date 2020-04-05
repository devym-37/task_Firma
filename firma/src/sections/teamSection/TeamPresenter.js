import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "react-multi-carousel/lib/styles.css";
import Card from "../../component/Card";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const TeamPresenter = ({ team }) => (
  <>
    <div id="Team_09">
      <svg className="Background_c">
        <rect
          fill="rgba(241,241,241,1)"
          id="Background_c"
          rx="0"
          ry="0"
          x="0"
          y="0"
          width="1440"
          height="954"
        ></rect>
      </svg>

      {team.map((item, index) => (
        <Card
          imageUrl={`${item.imageUrl}`}
          name={`${item.name}`}
          job={`${item.job}`}
          card={index}
        />
      ))}
      <div id="Teamwork_Makes_The_D">
        <span>Teamwork Makes The Dream Work</span>
      </div>
    </div>
  </>
);

export default TeamPresenter;
