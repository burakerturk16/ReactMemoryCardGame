import React from "react";
import Card from "./Card";
import "./Table.css";

const Table = props => {
  const { cards } = props;

  const cardList = cards.map(c => <Card number={c} key={c} />);

  return <div className="Table">{cardList}</div>;
};

export default Table;
