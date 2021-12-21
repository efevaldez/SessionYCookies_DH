module.exports = {
    checker: (req, res, next) => {
        res.locals.isLogged = false;
    
        let colourCookie = req.cookies.colorUsuario;
        let nameCookie = req.cookies.nombreUsuario;
    
        colourCookie? 
            req.session.user = {
                colorUsuario: colourCookie, 
                nombreUsuario = nameCookie
            } 
            : "";
    
        if (req.sessiom.user) { 
            res.locals.isLogged = true;
            res.locals.user = req.session.user;
        }
    }
}