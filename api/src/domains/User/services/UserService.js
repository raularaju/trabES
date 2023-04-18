const User = require('../models/User');

class UserService {

    async create(body) {
        User.create(body);
    }
}

module.exports = new UserService;