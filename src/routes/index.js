import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { map } from "lodash";
import { MainRoutes, AuthRoutes } from "./routes";
import LogoLoader from "../components/Loader/LogoLoader";

const Routes = ({ store, _setVal }) => {
  const RoutesItems = store?.user ? MainRoutes : AuthRoutes;
  return (
    <Switch>
      {map(RoutesItems, (route, key) => {
        return (
          <Route
            key={key}
            exact={route.exact ? true : false}
            path={route.path}
            render={(props) => (
              <route.component
                lang={store?.lang}
                user={store?.user}
                _setVal={_setVal}
                fallback={<LogoLoader />}
              />
            )}
          />
        );
      })}
      <Redirect to={store?.user ? "/" : "/signin"} />
    </Switch>
  );
};
export default Routes;
