import React, { Component } from "react";

import { HomePageHeading } from "./shared/styledComponents";



class Home extends Component {
  render() {
    return (
      <div style={{marginTop:"100px"}}>
        <HomePageHeading>Welcome to our Shop Online!</HomePageHeading>
        <br/>
        <div style={{marginTop:"40px", marginLeft:"100px"}}>
          <h2>Version 1.0</h2>
          <p>This is a new version released on 1st of March 2020.</p>
          <p>
            You can now explore our products online by going to our products page.
          </p>
          <p>You can find our products page by clicking on the Products, on the left side menu.</p>
        </div>
   </div>
    );
  }
}

export default Home;
