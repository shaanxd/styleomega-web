import React from 'react';
import './App.css';

import RootScreen from './Root.screen';

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <RootScreen />
      </div>
    );
  }
}

export default App;
