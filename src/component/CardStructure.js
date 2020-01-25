import React from "react";
import { Box } from "grommet";

const CardStructure = props => {
  const { children, direction, elevation, height, width } = props;
  return (
    <Box
      direction={direction || "column"}
      width={width || "20vw"}
      height={height || "50vh"}
      elevation={elevation || "small"}
      round
      focusIndicator
      hoverIndicator
      animation={{
        "type": "pulse",
        "delay": 0,
        "duration": 6000,
        "size": "medium"
      }}
    >
      {children}
    </Box>
  );
};

export default CardStructure;
