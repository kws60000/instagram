import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import Fake from './pages/Fake';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Feed} />
      <Route path="/new" component={Fake} />
    </Switch>
  );
}

export default Routes;
