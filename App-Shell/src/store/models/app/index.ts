import { Action, action } from "easy-peasy";

export interface AppModel {
  isConnected: Boolean
  token: String
  email: String
  name: String
  id: String
  lang: String
  changeLanguage: Action<AppModel, String>;
}

const app: AppModel = {
  isConnected: false,
  token: '',
  email: '',
  name: '',
  id: '',
  lang: 'fr',
  changeLanguage: action((state, payload) => {
    state.lang = payload;
  })
};

export default app;