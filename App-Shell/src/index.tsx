/** 
 * Modules
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
/** 
 * MaterialUI
 */
import { ThemeProvider } from '@material-ui/styles';
import { theme } from 'styles/theme'

/** 
 * Store
 */
import { StoreProvider } from 'easy-peasy'
import store from "store";

import routes_fr from "translations/fr/routes.json";
import routes_en from "translations/en/routes.json";

import signup_fr from "translations/fr/signup.json";
import signup_en from "translations/en/signup.json";

import signin_fr from "translations/fr/signin.json";
import signin_en from "translations/en/signin.json";

import status_fr from "translations/fr/status.json";
import status_en from "translations/en/status.json";
/** 
 * Component Import
 */
import App from 'components/App';

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'fr',
  resources: {
    en: {
      routes: routes_en,
      signup: signup_en,
      signin: signin_en,
      status: status_en
    },
    fr: {
      routes: routes_fr,
      signup: signup_fr,
      signin: signin_fr,
      status: status_fr
    },
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
      <Router>
        <StoreProvider store={store}>
          <I18nextProvider i18n={i18next}>
          <App />
          </I18nextProvider>
        </StoreProvider>
      </Router>
    </ThemeProvider>,
  document.getElementById('root'));