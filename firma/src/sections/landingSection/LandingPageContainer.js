import React from "react";

import LandingPagePresenter from "./LandingPagePresenter";

export default class extends React.Component {
  onClickAlert = (e) => {
    alert("클릭한 버튼 : " + e);
  };

  render() {
    const { onClickAlert } = this;
    return (
      <>
        <LandingPagePresenter onClickAlert={onClickAlert} />
      </>
    );
  }
}
