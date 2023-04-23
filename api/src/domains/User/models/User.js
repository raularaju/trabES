const Sequelize = require('sequelize');
const database = require('../../../../database/index');
const userRoles = require('../../../utils/constants/userRoles');

const User = database.define('User', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    cpf: {
        type: Sequelize.STRING(14),
        allowNull: false,
        unique: true
    },

    phone_number: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
    },
    
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

    role: {
        type: Sequelize.ENUM,
        values: [userRoles.ADMINISTRATOR, userRoles.EMPLOYEE]
    }
},
{
    freezeTableName: true
});


module.exports = User;
