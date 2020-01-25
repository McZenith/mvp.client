import React from "react";
import { Section } from "../common";

const NavBar = () => {
  return (
    <Section
      oHeight="15vh"
      background="white"
      align="center"
      justify="between"
      iWidth="96.5%"
      border={{
        color: "border",
        size: "0.5px",
        style: "solid",
        side: "bottom"
      }}
    >
      Hello World
    </Section>
  );
};

export default NavBar;
