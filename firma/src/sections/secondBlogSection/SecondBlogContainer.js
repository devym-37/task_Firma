import React from "react";
import SecondBlogPresenter from "./SecondBlogPresenter";

export default class extends React.Component {
  onClickUrl = () => {
    alert("Page Url Router");
  };

  render() {
    const { onClickUrl } = this;
    return (
      <>
        <SecondBlogPresenter onClickUrl={onClickUrl} />
      </>
    );
  }
}
