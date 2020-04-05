import React from "react";
import TeamPresenter from "./TeamPresenter";

export default class extends React.Component {
  state = {
    index: 0,
  };

  onSelect = () => {
    this.setState({
      index: 1,
    });
  };

  onProfile = () => {
    const data = [
      {
        name: "Edward Lindgren",
        job: "Marketing Manager",
        imageUrl: "Edward.svg",
      },
      {
        name: "Gabriel Soares",
        job: "Product Manager",
        imageUrl: "Soares.svg",
      },
      {
        name: "Justine Marshall",
        job: "Senior Developer",
        imageUrl: "Justine.svg",
      },
      {
        name: "Georges Embolo",
        job: "Product Designer",
        imageUrl: "Georges.svg",
      },
      {
        name: "Paulina Gayoso",
        job: "Head Of Sales",
        imageUrl: "Gayoso.svg",
      },
    ];
    return data;
  };
  render() {
    const { onProfile } = this;
    const team = onProfile();
    return <TeamPresenter team={team} />;
  }
}
