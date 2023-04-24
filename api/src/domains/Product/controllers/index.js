const Router = require('express').Router();
const ProductService = require('../services/ProductService');
const httpsStatusCodes = require('../../../utils/constants/httpStatusCodes')

Router.post('/', async (req, res, next) => {
    try{
        await ProductService.create(req.body);
        res.status(httpsStatusCodes.ACCEPTED).send("Produto criado com sucesso");
    }catch(error){
        next(error);
    }
    })
   

Router.put('/:id', async (req, res, next) => {
    try{
        await ProductService.update(req.params.id, req.body);
        res.status(httpsStatusCodes.ACCEPTED).send("Produto atualizado com sucesso");
    }catch(error){
        next(error);
    }
    })

Router.get('/', async (req, res, next) => {
    try{
        all_products=await ProductService.getall();
        res.status(httpsStatusCodes.ACCEPTED).send(all_products);
    }catch(error){
        next(error);
    }
    })
module.exports = Router;