const { validationResult } = require('express-validator')
module.exports = {

    index: (req, res) => {
        res.render('index', { title: 'Login Form', userBackground: "darkgray" })
    },
    test: (req, res) => {
        const errors = validationResult(req);
        console.log();
        if (errors.isEmpty()) {
            req.session.userLogin = {
                name: req.body.name.trim(),
                email: req.body.email.trim(),
                color: req.body.color.trim()
            }
            return res.redirect('/');
        } else {
            return res.render('index', { title: 'Passed', userBackground: "darkgrey", errors: errors.mapped(), old: req.body })
        }
    },
    otraVista: (req, res) => {
        res.render('otraVista', { title: 'Otra Vista' });
    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    }
}