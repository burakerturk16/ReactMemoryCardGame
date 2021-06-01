import React, { Component } from "react";
import Header from "./Header";
import Table from "./Table";

const cards = [];

for (let i = 1; i <= 10; i++) {
  if(cards[i] !== null)
  cards.push(i);
  cards[i] = cards[i+1];
  cards.push(i);
}
cards[1] = 1;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Table cards={cards} />
      </div>
    );
  }
}

export default App;
