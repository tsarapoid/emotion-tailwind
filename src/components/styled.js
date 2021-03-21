/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
//import { jsx } from "theme-ui";
import tw, { styled, css } from "twin.macro";

export const hoverStyles = css`
  ${tw`text-gray-600`};
  &:hover {
    border-color: black;
    ${tw`text-black border-solid`}
  }
`;

export const One = () => <div tw="text-blue-300">One</div>;

export const Two = ({ hasHover }) => (
  <div
    css={[
      tw`border border-solid border-black`,
      hasHover && tw`hover:border-blue-300`
    ]}
  >
    Two
  </div>
);

export const Three = ({ hasHover, text = "Three" }) => (
  <div css={[tw`border`, hasHover && hoverStyles]}>{text}</div>
);

export const Four = tw.div`border border-solid border-blue-300 hover:border-black`;

//export const Four = tw("div")`border border-solid border-blue-300 hover:border-black`;

export const Five = tw(Four)`border-purple-500`;

export const StyledSix = styled.div(({ hasBorder }) => [
  `color: black;`,
  hasBorder && tw`border-purple-500 border-solid border rounded-sm`
]);

export const Six = () => <StyledSix hasBorder>Six</StyledSix>;

export const StyledSeven = styled.div`
  color: black;
  ${({ hasBorder }) => hasBorder && tw`border border-solid border-purple-500`}
`;

export const Seven = () => <StyledSeven hasBorder>Seven</StyledSeven>;

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

export const Eight = () => (
  <StyledEight hasBorder color="blue">
    Eight
  </StyledEight>
);

export const StyledNine = styled.div`
  span {
    ${tw`text-blue-800`};
  }
`;

export const Nine = () => (
  <StyledNine>
    <span>Nine</span>
  </StyledNine>
);
/* 
export default {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine
};
 */
