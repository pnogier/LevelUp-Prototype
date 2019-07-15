import express from 'express'
import jwt, { JsonWebTokenError } from 'jsonwebtoken'

import config from 'config/local'

const authClientToken = async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    let token = req.headers['x-access-token'];
    
    if (!token){
        return res.status(401).json({
            "errors" : [{
                "msg" : " No token provided"
            }]
        });
    } 
    //@ts-ignore
    jwt.verify(token, config.jwt_secret , (err: JsonWebTokenError) => {
        if(err){
            return res.status(401).json({
                "errors" : [{
                    "msg" : "Invalid Token"
                }]
            });
        }
        
        return next();
    });
}

export default {
    authClientToken : authClientToken
}