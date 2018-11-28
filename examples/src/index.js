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
        <TCol xs={12} lg={2} />
        <TCol xs={12} lg={2} start bottom>
          <p>Hello</p>
        </TCol>
        <TCol xs={12} lg={2} />
      </TRow>
    </TGrid>
  </div>
);
render(<App />, document.getElementById("root"));
