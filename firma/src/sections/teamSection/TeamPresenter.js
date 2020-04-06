import React from "react";
import { Slide } from "react-slideshow-image";
import Card from "../../component/Card";

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
      <div className="teamSlide-container">
        <Slide {...properties}>
          {team.map((item, index) => (
            <div className="teamEach-slide">
              <Card
                imageUrl={`${item.imageUrl}`}
                name={`${item.name}`}
                job={`${item.job}`}
                card={index}
              />
            </div>
          ))}
        </Slide>
      </div>
      <div id="Teamwork_Makes_The_D">
        <span>Teamwork Makes The Dream Work</span>
      </div>
    </div>
  </>
);

export default TeamPresenter;
