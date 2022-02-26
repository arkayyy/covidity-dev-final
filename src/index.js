import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import allReducers from './redux/reducers/reducerIndex';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {CookiesProvider} from 'react-cookie'

import {Auth0Provider} from '@auth0/auth0-react'

//const store=createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)));
console.reportErrorAsExceptions=false;
ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
    <Auth0Provider
    domain='covidity.us.auth0.com'
    clientId='mJhep4Xe4VO3tbIJE20flyGfdjx2kMFi'
    redirectUri={window.location.origin}>
    <App/>
    </Auth0Provider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
