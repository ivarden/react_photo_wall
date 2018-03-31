import React from "react";
import { Link } from "react-router-dom";

const Title = props => {
  const { title } = props;
  return (
    <h1>
      <Link to={"/"}>{title}</Link>
    </h1>
  );
};

export default Title;
