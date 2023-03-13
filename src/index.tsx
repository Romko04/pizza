import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import { store } from './redux/store';
const rootElement = document.getElementById('root')
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Provider store={store}>
      <HashRouter >
        <App />
      </HashRouter>
    </Provider>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
