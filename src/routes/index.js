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



router.get('/videoblog/blog-detalle', (req, res) => {
    res.render('./partials/blog-detalle');
});

router.get('/videoblog', (req, res) => {
    res.render('./layouts/videoblog');
});

router.get('/contacto', (req, res) => {
    res.render('./layouts/contacto');
});

router.get('/cookies', (req, res) => {
    res.render('./layouts/cookies');
});

router.get('/privacy', (req, res) => {
    res.render('./layouts/privacy');
});

router.get('/panel-japones', (req, res) => {
    res.render('./productos/panel-japones');
});

router.get('/bambulita', (req, res) => {
    res.render('./productos/bambulita');
});

router.get('/cortina-onda-perfecta', (req, res) => {
    res.render('./productos/cortina-onda-perfecta');
});

router.get('/cortina-romana', (req, res) => {
    res.render('./productos/cortina-romana');
});

router.get('/cortina-tradicional', (req, res) => {
    res.render('./productos/cortina-tradicional');
});

router.get('/enrollables-en-vinilo', (req, res) => {
    res.render('./productos/enrollables-en-vinilo');
});

router.get('/enrollable-blackout', (req, res) => {
    res.render('./productos/enrollable-blackout');
});

router.get('/papel-de-colgadura', (req, res) => {
    res.render('./productos/papel-de-colgadura');
});

router.get('/peliculas-para-vidrios', (req, res) => {
    res.render('./productos/peliculas-para-vidrios');
});

router.get('/pergolas', (req, res) => {
    res.render('./productos/pergolas');
});

router.get('/persiana-en-aluminio', (req, res) => {
    res.render('./productos/persiana-en-aluminio');
});

router.get('/persiana-enrollable', (req, res) => {
    res.render('./productos/persiana-enrollable');
});

router.get('/persiana-vertical', (req, res) => {
    res.render('./productos/persiana-vertical');
});

router.get('/persianas-estampadas', (req, res) => {
    res.render('./productos/persianas-estampadas');
});

router.get('/sheer-elegance', (req, res) => {
    res.render('./productos/sheer-elegance');
});

router.get('/toldos', (req, res) => {
    res.render('./productos/toldos');
});

router.get('/cortina-hospitalaria', (req, res) => {
    res.render('./productos/cortina-hospitalaria');
});


router.get('/sitemap', (req, res) => {
    res.render('layouts/sitemap');
});

module.exports = router;