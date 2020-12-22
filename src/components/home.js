import React, { Component } from "react";

import { HomePageHeading } from "./shared/styledComponents";



class Home extends Component {
  render() {
    return (
      <div style={{marginTop:"100px"}}>
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
        <HomePageHeading>Welcome to Kelisto Shop Online!</HomePageHeading>
        <div style={{ textAlign: "center" }}>
          <p>Version 1.0</p>
          <p>This is a new version released on 18 December 2020.</p>
          <p>
            Christmas time is here again.
            You can now see our wide range of products.
          </p>
          <p>
            Grab your winter promotions.
            HO! HO! HO! Merry Christams and a Happy New Year from Kelisto team!
          </p>
        </div>
      </div>
   </div>
    );
  }
}

export default Home;
