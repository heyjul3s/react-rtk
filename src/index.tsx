import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ConnectedApp } from './ConnectedApp';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

const render = (Component: typeof App) => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

if (module.hot) {
  module.hot.accept(['./App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    const App = require('./App').App;
    render(App);
  });
}

render(App);
