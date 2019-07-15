import app, { AppModel } from "./app";


export interface StoreModel {
  app: AppModel;
};

const model: StoreModel = {
  app,
};

export default model;