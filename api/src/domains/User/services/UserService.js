const User = require('../models/User');
const NotFoundError = require('../../../../errors/NotFoundError');
const encryptPassword = require('../../../utils/functions/encryptPassword');
const { UniqueConstraintError, QueryError } =  require('sequelize');
const DuplicateError = require('../../../../errors/DuplicateError');
class UserService {

    async create(body) {
        body.password =await encryptPassword(body.password);
        try{
            await User.create(body);
        }catch(error){
            if (error instanceof UniqueConstraintError){
                throw new DuplicateError('Esse email já está cadastrado no sistema!');
            }
            else 
                throw new QueryError('Os parâmetros não podem ser nulos');
        }
    }

    async getByEmail(email){
        const user = await User.findOne({
            where: {
                email: email
            }
        });
        if (!user){
            throw new NotFoundError('Usuário não encontrado');
        }
        return user;
    }
}

module.exports = new UserService;