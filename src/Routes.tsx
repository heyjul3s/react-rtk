import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Error404, Home } from '@/pages';

export function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="*" component={Error404} />
    </Switch>
  );
}
