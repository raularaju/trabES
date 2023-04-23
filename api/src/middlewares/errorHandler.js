/* eslint-disable no-unused-vars */
const {JsonWebTokenError} = require('jsonwebtoken');
const NotAuthorizedError = require('../../errors/NotAuthorizedError.js');
const InvalidParamError = require('../../errors/InvalidParamError');
const TokenError = require('../../errors/TokenError');
const QueryError = require('../../errors/QueryError');
const httpStatusCodes = require('../utils/constants/httpStatusCodes');
const { UniqueConstraintError } =  require('sequelize');

function errorHandler(error, req, res, next) {
    let message = error.message;
    let status = httpStatusCodes.INTERNAL_SERVER_ERROR;

    if (error instanceof JsonWebTokenError ||
    error instanceof NotAuthorizedError) {
        status = httpStatusCodes.FORBIDDEN;
    }

    if (error instanceof InvalidParamError) {
        status = httpStatusCodes.BAD_REQUEST;
    }

    if (error instanceof QueryError) {
        status = httpStatusCodes.BAD_REQUEST;
    }

    if (error instanceof UniqueConstraintError) {
        status = httpStatusCodes.BAD_REQUEST;
    }

    res.status(status).json(message);
}

module.exports = errorHandler;
