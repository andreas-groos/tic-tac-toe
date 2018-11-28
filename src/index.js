import React from "react";
import styled, { css } from "styled-components";
import * as style from "./constants";

// const extractNumber = str => str.match(/\d+/)[0];

// const media = Object.keys(style.screenSizes).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (min-width: ${sizes[label]}rem) {
//       ${css(...args)}
//     }
//   `;
//   return acc;
// }, {});

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
  display: flex;
  flex: 0 0 auto;
  padding: ${() => `0 ${style.gutterWidth}rem`};
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;

  /* TODO: make media queries use screenSizes constants... */
  /* NOTE: Media queries for width */
  @media (max-width: 48rem) {
    flex-basis: ${props => `${style.oneTwelth * props.xs}%`};
    max-width: ${props => `${style.oneTwelth * props.xs}%`};
  }
  @media (min-width: 48rem) and (max-width: 64rem) {
    flex-basis: ${props => `${style.oneTwelth * props.sm}%`};
    max-width: ${props => `${style.oneTwelth * props.sm}%`};
  }
  @media (min-width: 64rem) and (max-width: 75rem) {
    flex-basis: ${props => `${style.oneTwelth * props.md}%`};
    max-width: ${props => `${style.oneTwelth * props.md}%`};
  }
  @media (min-width: 75rem) {
    flex-basis: ${props => `${style.oneTwelth * props.lg}%`};
    max-width: ${props => `${style.oneTwelth * props.lg}%`};
  }
  /* NOTE: Media queries for offset */
  @media (max-width: 48rem) {
    margin-left: ${props => `${style.oneTwelth * props.offsetXs}%`};
  }
  @media (min-width: 48rem) and (max-width: 64rem) {
    margin-left: ${props => `${style.oneTwelth * props.offsetSm}%`};
  }
  @media (min-width: 64rem) and (max-width: 75rem) {
    margin-left: ${props => `${style.oneTwelth * props.offsetMd}%`};
  }
  @media (min-width: 75rem) {
    margin-left: ${props => `${style.oneTwelth * props.offsetLg}%`};
  }
  /* NOTE: postion props */
  justify-content: ${props => `${props.start ? "flex-start" : null}`};
  text-align: ${props => `${props.start ? "left" : null}`};
  justify-content: ${props => `${props.center ? "center" : null}`};
  text-align: ${props => `${props.center ? "center" : null}`};
  justify-content: ${props => `${props.end ? "flex-end" : null}`};
  text-align: ${props => `${props.end ? "right" : null}`};
  align-items: ${props => `${props.top ? "flex-start" : null}`};
  align-items: ${props => `${props.middle ? "center" : null}`};
  align-items: ${props => `${props.bottom ? "flex-end" : null}`};
  background: yellow;
  height: 100px;
  border: 1px green solid;
`;

export { TGrid, TRow, TCol };
