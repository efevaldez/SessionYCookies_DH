const {check} = require('express-validator');

module.exports = [
    check('nombreUsuario')
        .notEmpty().withMessage('El nombre es obligatorio'),

    check('emailUsuario')
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('Debes ingresar un email válido'),

    check('colorUsuario')
        .notEmpty().withMessage('Debes elegir un color'),

    check('edadUsuario')
        .isNumeric().withMessage('Debes ingresar un número'),
];