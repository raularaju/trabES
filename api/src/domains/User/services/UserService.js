const User = require('../models/User');
const NotFoundError = require('../../../../errors/NotFoundError')
class UserService {

    async create(body) {
        await User.create(body);
    }

    async getByEmail(emai){
        const user = await User.getOne({
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