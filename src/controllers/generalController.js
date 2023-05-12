const check = require("../libs/checkLib");
const response = require("../libs/responseLib");
const appConfig = require("../../config/appConfig");
const { v4: uuidv4 } = require('uuid');
const tokenLib = require("../libs/tokenLib");


let generateAPIKey = (req,res)=>{

    let data = {
        uid : uuidv4(),
        exptime : appConfig.sessionExpTime
    };
    tokenLib.generateToken(data,(err,tokenDetails)=>{
        if(err){
            let apiResponse = response.generate(true,`Error in generating key : ${err.message}`,null);
            res.status(412).send(apiResponse);
        }else{
            let apiResponse = response.generate(false,'key generated successfully!',tokenDetails.token);
            res.status(200).send(apiResponse);
        }
    })
}


module.exports = {
    generateAPIKey:generateAPIKey
}