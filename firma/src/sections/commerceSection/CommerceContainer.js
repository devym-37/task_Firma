import React from "react";
import CommercePresenter from "./CommercePresenter";

export default class extends React.Component {
  onClickAlert = (e) => {
    alert("클릭한 버튼 : " + e);
  };

  render() {
    const { onClickAlert } = this;
    return <CommercePresenter onClickAlert={onClickAlert} />;
  }
}
