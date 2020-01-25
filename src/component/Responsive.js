import React, { useContext } from "react";
import { ResponsiveContext } from "grommet";

const Responsive = props => {
  const size = useContext(ResponsiveContext);
  const { children } = props;
  return <></>;
};

export default Responsive;
