const { Router } = require('express');
const router = Router();


const UserAdm = require('../controllers/adm.controller');

new UserAdm()._use(router);
module.exports = router;


