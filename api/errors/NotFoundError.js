/* Caso o usuário procurado não seja encontrado. */
class NotFoundError extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'NotFoundError';
    }
}

module.exports = NotFoundError;
