import React from "react";

interface Props {}

class Home extends React.Component<Props> {
  render() {
    return (
      <div>
        <h1 className="title">Home Page</h1>
        <p className="words">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, vitae. Id
          unde dolor voluptatibus doloribus! Temporibus libero atque reiciendis
          eveniet debitis! Autem delectus maxime necessitatibus repellat
          consequuntur sit rerum voluptatibus!
        </p>
      </div>
    );
  }
}

export default Home;
