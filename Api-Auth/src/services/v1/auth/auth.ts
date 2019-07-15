import express from 'express'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator/check'

import config from 'config/local'
import userModel from '../../../models/user';

const register = async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    const permissionLevel = config.permissionLevels.NORMAL_USER
    
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }

    let { name, email , password } = req.body;

    let isEmailExists = await userModel.findOne({"email" : email});

    if(isEmailExists){
        return res.status(409).json({
            "errors" : [{
                "msg" : "email already exists"
            }]
        })
    }

    let hashedPassword = await bcrypt.hash(password, 8);

    try{
        let user = await userModel.create({
            name,
            email,
            password : hashedPassword,
            permissionLevel
        });
    
        if(!user){
            //@ts-ignore
            throw new errors();
        }
    
        return res.status(201).json({
            "success" : [{
                "msg" : "user registered successfully"
            }]
        });
    }catch(error){
        console.log(error);
        return res.status(500).json(
            { 
                "errors" : [{
                    "msg": "there was a problem registering a user."   
                }]
            }
        );
    }
    

}

const login = async (req: express.Request, res: express.Response) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }

    let { email, password } = req.body

    try{
        let isUserExists = await userModel.findOne({"email" : email});

        let isPasswordValid = await bcrypt.compare(password, isUserExists.password);

        if(!isUserExists || !isPasswordValid){
            return res.status(401).json({
                "errors" : [{
                    "msg" : "email/password is wrong"
                }]
            })
        }

        let token = jwt.sign({ 
            id: isUserExists._id,  
            permissionLevel: isUserExists.permissionLevel
        }, config.jwt_secret, { expiresIn: config.jwt_expiration_in_seconds });

        res.status(200).json({
            "success" : [{
                "msg" : "user login successfully",
                "email" : email,
                "name": isUserExists.name,
                "token" : token,
                "id": isUserExists._id,
            }]
        })
    }catch(error){
        console.log(error);
        return res.status(500).json(
            { 
                "errors" : [{
                    "msg": "there was a problem login a user."   
                }]
            }
        );
    }
    
}

export default {
    register : register,
    login : login
}