import React from "react";
import styled, { css } from "styled-components";
import * as style from "./constants";

const extractNumber = str => str.match(/\d+/)[0];

const TGrid = styled.div`
  margin: ${props =>
    props.fluid
      ? `0 ${style.gutterWidth * 2}rem`
      : `0 ${style.containerMargin}rem`};
  background: grey;
`;

const TRow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin: ${() => `0 ${style.gutterWidth}rem`};
  background: red;
`;

const TCol = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding: ${() => `0 ${style.gutterWidth}rem`};
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;
  flex-basis: ${props => `${style.oneTwelth * props.xs}%`};
  max-width: ${props => `${style.oneTwelth * props.xs}%`};
  background: yellow;
  height: 100px;
  border: 1px green solid;
`;

export { TGrid, TRow, TCol };
