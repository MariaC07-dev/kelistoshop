import { Link } from "react-router-dom";
import React from "react";
import { theme } from "../../constants";
import styled from "styled-components";

export const SideMenuDiv = styled.div`
  background-color: ${theme.colors.sideMenu.background};
  border-right: 1px solid #bfbfbf;
  height: 100%;
  font-size: 13px;
  width: 218px;
`;

export const SideMenuWhiteDiv = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #989b82;
  margin-top: 0px;
  padding: 8px;
  padding-left: 15px;
`;

export const SideMenuLinkStyle = styled(Link)`
  padding: 8px;
  padding-left: 15px;
  display: block;
  border-bottom: 1px solid #989b82;
  border-width: thin;
  border-color: gray;
  color: #202020;
  text-decoration: none;
  &:hover {
    text-decoration: ${props => (props.params.isSelected ? "none" : "none")};
  }
  font-weight: ${props => (props.params.isSelected ? "bold" : "normal")};
  background-color: ${props =>
    props.params.isSelected ? "#c7cf93" : "#e0e4c2"};
`;

export const SideMenuLink = props => {
  return (
    <SideMenuLinkStyle
      id={props.id}
      to={props.to}
      children={props.children}
      params={{ isSelected: props.isSelected }}
    />
  );
};

export const Icon = styled.img`
  cursor: pointer;
`;
