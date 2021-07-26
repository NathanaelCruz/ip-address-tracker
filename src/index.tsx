import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyles from './assets/styles/global';
import { theme } from './assets/styles/theme';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
