import React from "react";
import { Box, Image } from "grommet";

const ImageBox = props => {
  const { src, fill, Iheight } = props;
  return (
    <Box fill="horizontal" height={Iheight || "60%"}>
      <Image src={src} fill={fill || true} />
    </Box>
  );
};

export default ImageBox;
