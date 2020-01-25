import React, { useContext } from "react";
import { ResponsiveContext } from "grommet";
import { OuterBox, InnerBox } from "../component";

const Section = props => {
  const { children, oHeight, background, align, justify, iWidth } = props;
  let size = useContext(ResponsiveContext);
  return (
    <OuterBox
      oHeight={oHeight}
      background={size !== "small" ? background : "brand"}
    >
      <InnerBox
        direction={size === "small" ? "column-reverse" : "row"}
        align={align}
        justify={justify}
        iWidth={iWidth}
      >
        {children}
      </InnerBox>
    </OuterBox>
  );
};

export default Section;
