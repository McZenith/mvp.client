import React from "react";
import { Box } from "grommet";

const OuterBox = props => {
  const { oHeight, background, round, children } = props;
  return (
    <Box
      height={oHeight}
      fill="horizontal"
      background={background}
      align="center"
      justify="center"
      basis="auto"
      flex
      responsive
      round={round || null}
    >
      {children}
    </Box>
  );
};

export default OuterBox;
