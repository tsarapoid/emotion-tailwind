/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import tw, { styled } from "twin.macro";

export const StyledEight = styled.div`
  ${tw`text-lg`};
  ${({ hasBorder }) => hasBorder && tw`border border-solid border-purple-500`};
  ${({ color }) =>
    color &&
    `
    color: ${color};
  `};
  font-weight: 500;
`;

export const MyComponent = () => (
  <StyledEight hasBorder color="blue">
    Eight
  </StyledEight>
);
