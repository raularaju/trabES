const bcrypt = require('bcrypt');

async function encryptPassword(password) {
    const SALT = 10;
    const encryptedPassword = await bcrypt.hash(password, SALT);
    return encryptedPassword;
}

module.exports = encryptPassword;
