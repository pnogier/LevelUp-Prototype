import express from 'express'
import userModel from '../../../models/user'

const getUserDetails = async (req: express.Request,res: express.Response) => {

    let { userId } = req.params;

    let user = await userModel.findById(userId).select('name , email');

    if(!user){
        return res.status(404).json({
            "errors":[{
                "msg" : " no user found"
            }]
        })
    }

    return res.status(200).json({
        "success" : [{
            "msg" : " user fetched successfully",
            "data" : user
        }]
    })
}

export default {
    getUserDetails : getUserDetails
}