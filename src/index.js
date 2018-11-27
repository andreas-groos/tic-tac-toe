import React from "react";
import styled, { css } from "styled-components";

const TRow = styled.div`
  display: flex;
  justify-content: ${props =>
    props.justifyContent === "center"
      ? "center"
      : props.justifyContent === "start" ||
        props.justifyContent === "flex-start"
      ? "flex-start"
      : props.justifyContent === "end" || props.justifyContent === "flex-end"
      ? "flex-end"
      : props.justifyContent === "between" ||
        props.justifyContent === "space-between"
      ? "space-between"
      : props.justifyContent === "around" ||
        props.justifyContent === "space-around"
      ? "space-around"
      : props.justifyContent === "evenly" ||
        props.justifyContent === "space-evenly"
      ? "space-evenly"
      : null};
  align-items: ${props =>
    props.alignItems === "start" || props.alignItems === "flex-start"
      ? "flex-start"
      : props.alignItems === "end" || props.alignItems === "flex-end"
      ? "flex-end"
      : props.alignItems === "center"
      ? "center"
      : props.alignItems === "stretch"
      ? "stretch"
      : props.alignItems === "baseline" || props.alignItems === "base"
      ? "baseline"
      : null};
  flex-wrap: ${props => props.wrap};
  border: 1px red solid;
  min-height: ${props => (props.fillHeight ? "100%" : null)};
  & > div {
    display: ${props => (props.centered ? "flex" : null)};
    justify-content: ${props => (props.centered ? "center" : null)};
    align-items: ${props => (props.centered ? "center" : null)};
    /* flex: ${props => (props.centered ? 1 : null)}; */
  }
`;

const TCol = styled.div`
  display: flex;
  justify-content: ${props => (props.centered ? "center" : null)};
  align-items: ${props => (props.centered ? "center" : null)};
  flex: ${props => (props.centered ? 1 : null)};
  border: 1px blue solid;
`;

export { TRow, TCol };
