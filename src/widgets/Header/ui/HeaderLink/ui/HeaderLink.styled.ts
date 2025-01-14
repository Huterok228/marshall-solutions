import styled from "styled-components";

import { Color, FontFamily, Transition } from "shared/config/cssVariables";

interface HeaderLinkContainerProps {
  isActive: boolean;
}

export const HeaderLinkContainer = styled.a.attrs(
  (props: HeaderLinkContainerProps) => props
)`
  color: ${(props) => (props.isActive ? Color.BLUE : Color.GREY0)};
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;

  transition: ${Transition.DEFAULT};

  &:hover {
    color: ${Color.BLUE};
  }

  @media (max-width: 1600px) {
    font-size: 14px;
  }

  @media (max-width: 1300px) {
    font-size: 12px;
  }

  @media (max-width: 1100px) {
    font-size: 11px;
  }
`;
