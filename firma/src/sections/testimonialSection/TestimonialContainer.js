import React from "react";
import TestimonialPresenter from "./TestimonialPresenter";

export default class extends React.Component {
  onReview = () => {
    const reviews = [
      {
        name: "Georges Embolo",
        job: "Product Designer @Apex",
        imageUrl: "Embolo.svg",
        text: `  “It’s not only about what you write but how you present it. Only
        those who risk going too far can possibly find out how far one can
        go."`,
      },
      {
        name: "Artem Sazonov",
        job: "Product Designer @Apex",
        imageUrl: "Sazonov.svg",
        text: `“It’s not only about what you write but how you present it. Only
        those who risk going too far can possibly find out how far one can
        go."`,
      },
      {
        name: "Pin Jung-Eum",
        job: "Product Designer @Apex",
        imageUrl: "Pin.svg",
        text: `“It’s not only about what you write but how you present it. Only
        those who risk going too far can possibly find out how far one can
        go."`,
      },
      {
        name: "Tao Yi",
        job: "Product Designer @Apex",
        imageUrl: "TaoYi.svg",
        text: `“It’s not only about what you write but how you present it. Only
      those who risk going too far can possibly find out how far one can
      go."`,
      },
    ];
    return reviews;
  };
  render() {
    const { onReview } = this;
    const reviews = onReview();
    return <TestimonialPresenter reviews={reviews} />;
  }
}
