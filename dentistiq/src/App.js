import React from 'react';
import HomePage from './components/homePage/HomePage';
import { Provider } from 'react-redux';
import store from './store/store';
import styles from '../src/styles/styles.module.css'

function App() {
  return (
    <Provider store={store}>
      <div>
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
