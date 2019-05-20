import React from "react";

interface Props {}

interface State {
  hometitle: string;
  bodytext: string;
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hometitle: "Home Page",
      bodytext:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit Ex vitae.Id unde dolor voluptatibus doloribus! Temporibus libero atque reiciendiseveniet debitis! Autem delectus maxime necessitatibus repellatconsequuntur sit rerum voluptatibus! "
    };
  }

  render() {
    return (
      <div>
        <h1 className="title">{this.state.hometitle}</h1>
        <p className="words">{this.state.bodytext}</p>
      </div>
    );
  }
}

export default Home;
