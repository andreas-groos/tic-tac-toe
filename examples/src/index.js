import React from "react";
import { render } from "react-dom";
import { TGrid, TRow, TCol } from "../../src";
import Highlight from "react-highlight";
import "../../node_modules/highlight.js/styles/monokai-sublime.css";

import "./styles.css";

const App = () => (
  <div className="full-page-background">
    <TGrid>
      <h1>Tic Tac Toe</h1>
      <h3>Demo still to be implemented</h3>
      <TRow>
        {/* <TCol xs={12} md={4} lg={2}>
          <p>Hello</p>
        </TCol>
        <TCol xs={12} md={4} lg={2}>
          <p>Hello</p>
        </TCol>
        <TCol xs={12} md={4} lg={2}>
          <p>Hello</p>
        </TCol> */}
        <TCol />
        <TCol />
      </TRow>
    </TGrid>
  </div>
);
render(<App />, document.getElementById("root"));
