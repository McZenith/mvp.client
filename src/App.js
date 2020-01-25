import React from "react";
import { Grommet } from "grommet";
import { theme } from "./themes";
import { Home } from "./routes";

function App() {
  return <Grommet theme={theme}>
    <Home />
  </Grommet>;
}

export default App;
