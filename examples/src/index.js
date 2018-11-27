import React from "react";
import { render } from "react-dom";
import { RedHeadline, TRow, TCol } from "../../src";
const App = () => (
  <div style={{ height: "500px" }}>
    <TRow fillHeight justifyContent="end">
      <TCol centered>
        <h1>Hello</h1>
      </TCol>
    </TRow>
  </div>
);
render(<App />, document.getElementById("root"));
