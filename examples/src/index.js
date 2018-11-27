import React from "react";
import { render } from "react-dom";
import { TRow, TCol } from "../../src";
import Highlight from "react-highlight";
import "../../node_modules/highlight.js/styles/monokai-sublime.css";

import "./styles.css";

const App = () => (
  <div className="full-page-background">
    <h1>Tic Tac Toe</h1>
    <h3>Demo still to be implemented</h3>
  </div>
);
render(<App />, document.getElementById("root"));
