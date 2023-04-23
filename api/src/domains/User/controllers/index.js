const Router = require('express').Router();
const {notLoggedIn, loginMiddleware} = require('../../../middlewares/auth');
const httpStatusCodes = require('../../../utils/constants/httpStatusCodes');
const UserService = require('../services/UserService');

Router.post('/', async (req, res, next) => {
    try{
        await UserService.create(req.body);
        res.status(httpStatusCodes.ACCEPTED).send('Conta criada com sucesso');
    }catch(error){
        next(error);
    }
});

Router.post('/login', notLoggedIn, loginMiddleware);

module.exports = Router;