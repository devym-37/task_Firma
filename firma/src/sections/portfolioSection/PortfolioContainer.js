import React from "react";
import PortfolioPresenter from "./PortfolioPresenter";

export default class extends React.Component {
  onClickAlert = (e) => {
    alert("클릭한 버튼 : " + e);
  };

  render() {
    const { onClickAlert } = this;
    return <PortfolioPresenter onClickAlert={onClickAlert} />;
  }
}
