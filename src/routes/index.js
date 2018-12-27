const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    
    res.render('index', {title: 'Inicio'});
});

router.get('/contacto', (req, res) => {
    
    res.render('contacto', {title: 'Contacto'});
});

router.get('/nosotros', (req, res) => {
    
    res.render('nosotros', {title: 'Nosotros'});
});

module.exports = router;

