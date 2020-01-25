import React from "react";
import { CardStructure, ImageBox } from "../component";
import HeadingText from "./HeadingText";

const Card = props => {
  const { src } = props;
  return (
    <CardStructure>
      <ImageBox src={src} />
      <HeadingText />
    </CardStructure>
  );
};

export default Card;
