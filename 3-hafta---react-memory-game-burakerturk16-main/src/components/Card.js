import React, { useState } from "react";
import classNames from "classnames";

import "./Card.css";

const Card = props => {
  const { number } = props;
  const [flip, setFlip] = useState(false);
  let CardClasses = classNames("Card-content", {
    "is-flipped": flip
  });

  return (
    <article className="Card" onClick={() => setFlip(!flip)}>
      <div className={CardClasses}>
        <div className="Card-front Card-face" />
        <div className="Card-back Card-face">{number}</div>
      </div>
    </article>
  );
};

export default Card;
