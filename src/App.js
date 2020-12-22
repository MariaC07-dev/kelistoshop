import React, { Component } from "react";
import { withRouter, Switch} from "react-router-dom";
import { Flex } from "rebass";

import Home from "./components/home";
import Products from "./components/products";

import SideMenu from "./components/sideMenu/sideMenu";

import PropsRoute from "./lib/propsRoute";

class App extends Component {

  render() {
    return (

          <div>
            <Flex style={{ minHeight: 750 }}>
              <PropsRoute
                path="/"
                component={SideMenu}

              />
              <Switch>
                <PropsRoute exact path="/" component={Home} />
                <PropsRoute
                  path="/products"
                  component={Products}
                />
              </Switch>
            </Flex>
          </div>
    );
  }
}

export default withRouter(App);
