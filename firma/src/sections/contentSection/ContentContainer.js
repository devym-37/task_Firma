import React from "react";
import ContentPresenter from "./ContentPresenter";

export default class extends React.Component {
  onClickAlert = (e) => {
    alert("클릭한 버튼 : " + e);
  };

  render() {
    const { onClickAlert } = this;
    return <ContentPresenter onClickAlert={onClickAlert} />;
  }
}
