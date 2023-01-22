const { Router } = require('express');
const router = Router();


const UserAdmNote = require('../controllers/NoteAdm.controller');

new UserAdmNote()._use(router);
module.exports = router;


