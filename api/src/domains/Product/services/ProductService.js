const { QueryError } = require('sequelize');
const Product = require('../models/Product');

class ProductService{
    async create(body) {
        try {
            return await Product.create(body);
        }catch(error){
            console.log(error)
            throw new Error(error);
        }
    }

    async getall(){
        const produtos = await Product.findAll();
        return produtos
    }

    async update(id,body){
        const produto = await Product.findByPk(id);
        if (produto) {
            produto.set(body);
            await produto.save();
        }else{
            throw new QueryError("Produto não encontrado")
        }
    }

    async getByName(name) {
        const products = await this.getall(); // assuming you have a `getall` method that returns all products
        const productsByName = products.filter(product => product.name === name);
        return productsByName;
      }
}

module.exports = new ProductService;