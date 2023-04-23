const Router = require('express').Router();
// const User = require ('..models/User');
const UserService = require('../services/UserService');
const httpsStatusCodes = require('../../../utils/constants/httpStatusCodes')


Router.post('/', async (req, res, next) => {
    try{
        await UserService.create(req.body);
        res.status(httpsStatusCodes.ACCEPTED).send("Usuário criado com sucesso");
    }catch(error){
        next(error);
    }
    })

module.exports = Router;