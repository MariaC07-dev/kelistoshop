import React, { Component } from "react";
import { icons } from "../../assets/icons/icons";
import { Icon } from "./styledSideMenu";

import { SideMenuLink, SideMenuDiv, SideMenuWhiteDiv } from "./styledSideMenu";



class SideMenu extends Component {
//the username is harcoded for now
  state = {
    userFirstName: "Maria"
  }
  render() {
    const { location } = this.props;
    return (
      <div>
        <SideMenuDiv style={{ marginRight: "20px" }}>
          <SideMenuWhiteDiv>
            <span>Welcome {this.state.userFirstName}</span>
            <Icon style={{ float: "right" }} src={icons["smileyFaceIcon"]} />
          </SideMenuWhiteDiv>

          <SideMenuLink to="/" isSelected={location.pathname === "/"}>
            Home
          </SideMenuLink>

          <SideMenuLink
            to="/products"
            isSelected={location.pathname === "/products"}
          >
            Products
          </SideMenuLink>

          
        </SideMenuDiv>
      </div>
    );
  }
}

export default SideMenu;
