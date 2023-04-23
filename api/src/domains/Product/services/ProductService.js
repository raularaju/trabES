const { QueryError } = require('sequelize');
const Product = require('../models/Product');

class ProductService{
    async create(body) {
        Product.create(body);
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
}

module.exports = new ProductService;