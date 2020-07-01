import React from "react";
import { Switch, Route } from "react-router-dom";

import Feed from "./pages/Feed";
import Write from "./pages/Write";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Feed} />
      <Route path="/write" component={Write} />
    </Switch>
  );
}

export default Routes;
