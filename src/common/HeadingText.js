import React from "react";
import { Heading, Paragraph } from "grommet";

const HeadingText = props => {
  const { head, details } = props;
  return (
    <>
      <Heading margin="none" level="2" responsive>
        {head || "Hello!"}
      </Heading>
      <Paragraph margin="none">{details || "Hello World"}</Paragraph>
    </>
  );
};

export default HeadingText;
