import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import initStore from './lib/store';
import Routes from './routes';

const store = initStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
