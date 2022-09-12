import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const UserBarInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.p`
  margin-right: 10px;
  font-size: 14px;
  color: ${p => p.theme.colors.white};

  @media screen and (max-width: 425px) {
    font-size: 9px;
  }
`;

export const UserActionsList = styled.ul`
  display: flex;
  align-items: center;
`;

export const UserActionsListItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const UserActionsLink = styled(NavLink)`
  color: ${p => p.theme.colors.white};
  position: relative;

  &.active::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${p => p.theme.colors.white};;
    border-radius: 2px;
  }
`;