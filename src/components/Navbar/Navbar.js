import React from "react";
import { routes } from "../../config/Router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Wrapper,
  NavigationLeft,
  NavItem,
  SeasonItem,
  Navigaton,
  NavigationSeasons,
} from "./Navbar.styles";
const Navbar = () => {
  return (
    <Router>
      <Wrapper>
        <Navigaton>
          <NavigationLeft>
            {routes
              .filter((route) => !route.isSeason)
              .map((route) => (
                <NavItem>
                  <Link to={route.path}>{route.title}</Link>
                </NavItem>
              ))}
          </NavigationLeft>
          <NavigationSeasons>
            {routes
              .filter((route) => route.isSeason)
              .map((route) => (
                <SeasonItem>
                  <Link to={route.path}>{route.title}</Link>
                </SeasonItem>
              ))}
          </NavigationSeasons>
        </Navigaton>
      </Wrapper>
      <Switch>
        {routes.map((route) => (
          <Route exact={route.exact} path={route.path}>
            {route.component()}
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default Navbar;
