const PermissionError = require('../../errors/PermissionError');
const bcrypt = require('bcrypt');
const httpStatusCodes = require('../utils/constants/httpStatusCodes');
const UserService = require('../domains/User/services/UserService');

function jwtSign(user, res){
    const userInfo = {
        id: user.id,
        role: user.role,
        name: user.name
    };
    const token = jwt.sign({
        user: userInfo
    }, authConfig.JWT_SECRET,
    {expiresIn: authConfig.JWT_EXPIRATION});

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: false // AQUI TEM QUE SER TRUE QUANDO FOR PRA PRODUÇÃO
    });
}



async function jwtMiddleware(req, res, next) {
    try {
        const token = cookieExtractor(req);
        if (token) {
            const decoded = jwt.verify(token, authConfig.JWT_SECRET);
            req.user = decoded.user;
        }

        if (!req.user) {
            throw new PermissionError('Você deve fazer o login primeiro');
        }
        next();
    } catch (error) {
        next(error);
    }
}


const notLoggedIn = (req, res, next) => {
    try {
        const token = cookieExtractor(req);
        if (token) {
            jwt.verify(
                token,
                process.env.JWT_SECRET,
                (error) => {
                    if (!(error instanceof jwt.TokenExpiredError)) {
                        let user = jwt.decode(token);
                        throw new PermissionError('Você já está logado como: ' + user.user.name);
                    }
                },
            );
        }
        next();
    } catch (error) {
        next(error);
    }
};

function cookieExtractor(req){
    let token = null;

    if (req && req.cookies){
        token = req.cookies['jwt'];
    }

    return token;
}


async function loginMiddleware(req, res, next) {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await UserService.getByEmail(email);
        if (!user) {
            throw new PermissionError('Email ou senha inválido');
        } else {
            const matchingPassword = await bcrypt.compare(password, user.password);
            if (!matchingPassword) {
                throw new PermissionError('Email ou senha inválido');
            }
        }
        
        jwtSign(user, res);

        const userInfo = {
            name: user.name,
            role: user.role,
        };
        res.status(httpStatusCodes.ACCEPTED).send(userInfo);

    } catch (error) {
        next(error);
    }
}

module.exports = {
    notLoggedIn,
    loginMiddleware,
    jwtMiddleware
};
