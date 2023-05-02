const Router = require('express').Router();
const ProductService = require('../services/ProductService');
const httpsStatusCodes = require('../../../utils/constants/httpStatusCodes')

Router.post('/', async (req, res, next) => {
    try{
        console.log(req.body)
        const product = await ProductService.create(req.body);
        console.log("p: ", product)
        res.status(httpsStatusCodes.ACCEPTED).send(product);
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

// Router.get('/:name', async (req, res, next) => {
//     try {
//         const name = req.params.name;
//         const productsByName = await ProductService.getByName(name);
//         res.status(httpsStatusCodes.ACCEPTED).send(productsByName);
//     } catch (error) {
//         next(error);
//     }
// })
module.exports = Router;