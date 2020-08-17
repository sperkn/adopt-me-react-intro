import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Rocko" animal="Dog" breed="Havanese" />
      <Pet name="Luna" animal="Bird" breed="Cockatiel" />
      <Pet name="Roxy" animal="Cat" breed="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
