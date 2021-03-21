/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import tw, { styled } from "twin.macro";

import {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine
} from "./components/styled";

import { Fragment } from "react";
import { Component } from "./dark_with_quick_action";
import { MyComponent } from "./components/component.js";

const Wrapper = styled.div`
  ${tw`border border-2 border-solid rounded-sm p-4`};

  font-size: 26px;
  font-family: sans-serif;

  > * {
    ${tw`my-3 p-3`};
  }
`;

const App = () => (
  <Wrapper>
    <Fragment>
      <MyComponent />
      <Component />
    </Fragment>

    <One />
    <Two hasHover />
    <Three hasHover />
    <Four>Four</Four>
    <Five>Five</Five>
    <Six />
    <Seven />
    <Eight hasBorder />
    <Nine />
  </Wrapper>
);

export default App;
