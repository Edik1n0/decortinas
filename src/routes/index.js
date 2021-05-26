const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./partials/home');
});

router.get('/empresa', (req, res) => {
    res.render('./layouts/empresa');
});

router.get('/clients/add', (req, res) => {
    res.redirect('/');
});

// router.get('/productos', (req, res) => {
//     res.render('./layouts/productos');
// });

router.get('/contacto', (req, res) => {
    res.render('./layouts/contacto');
});


router.get('/cookies', (req, res) => {
    res.render('./layouts/cookies');
});

router.get('/privacy', (req, res) => {
    res.render('./layouts/privacy');
});

router.get('/productos/panel-japones', (req, res) => {
    res.render('./productos/panel-japones');
});

router.get('/servicios/web', (req, res) => {
    res.render('./servicios/web');
});

router.get('/sitemap', (req, res) => {
    res.render('layouts/sitemap');
});

router.get('/control', (req, res) => {
    res.render('./control/');
});

module.exports = router;