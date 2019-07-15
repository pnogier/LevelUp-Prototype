import apiRoute from './apis'
import express from 'express'

const init = (app: express.Express) => {
    app.get('*', function (req, res, next) {
        console.log(res)
        console.log('Request was made to: ' + req.originalUrl);
        return next();
    });
    
    app.use('/api', apiRoute);
}
export default {
    init
};