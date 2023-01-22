const { Router } = require('express');
const router = Router();

const NotesController = require('../controllers/notes.controller');

new NotesController()._use(router);

module.exports = router;


