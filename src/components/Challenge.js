import React from "react";
import Card from "@material-ui/core/Card";

const Challenge = ({ challenge }) => {
  return (
    <Card>
      <p>
        <b>{challenge.title}</b>
      </p>
      <p>{challenge.description}</p>
    </Card>
  );
};

export default Challenge;
