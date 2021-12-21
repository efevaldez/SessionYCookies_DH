const {validationResult} = require('express-validator');

module.exports = {
    home: (req, res) => {
        return res.render('index');
    },
    processForm: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let {nombreUsuario, colorUsuario, emailUsuario, edadUsuario} = req.body;
            let sip = req.body.recColor;

            if (sip) {
                res.cookie('nombreUsuario', nombreUsuario, {maxAge: 100000});
                res.cookie('colorUsuario', colorUsuario, {maxAge: 100000});
            }

            req.session.user = {colorUsuario, nombreUsuario};
        } else {
            res.render('index', {
                errors: errors.mapped(), 
                old: req.body
            });
        }
    },
    user: (req, res) => {
        res.render('user', {
            nombreUsuario: req.session.user.nombreUsuario,
            colorUsuario: req.session.user.colorUsuario
        });
    },
    reset: (req, res) => {
        req.session.destroy();
        res.clearCookie('nombreUsuario', 'colorUsusario');
        res.redirect('/');
    },
};