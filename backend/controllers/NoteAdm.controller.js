import { isAuthFactory } from '../util';
import { Get, Controller } from '../decorators/Controller';
const Order = require('../models/Formu');
const Note = require('../models/Note');

module.exports = class UserAdmNote extends Controller {
    constructor() {
        super("/");

        this._start(["/", "/:id"])
    }
    /* render nots*/
    ["Get:/:email"] = isAuthFactory(async (req, res) => {
        const notes = await Note.find({
            user: req.user.email
        });
        res.json(notes);
    })
 
    

    async ["Post:/"](req, res) {
        const { title, content, date, user } = req.body;
        const newNote = new Note({
            title,
            content,
            date,
            user
        });
        await newNote.save();
        res.json('New Note added');
    };

    async ["Get:/:id"](req, res) {
        const note = await Note.findById(req.params.id);
        res.json(note);
    }

    async ["Delete:/:id"](req, res) {
        await Note.findByIdAndDelete(req.params.id)
        res.json('Note Deleted');
    }

    async ["Put:/:id"](req, res) {
        const { title, content, duration, date, user } = req.body;
        await Note.findByIdAndUpdate(req.params.id, {
            title,
            content,
            duration,
            user
        });
        res.json('Note Updated');
    }
};
