import express from 'express';
import Order from '../models/Formu';
const Note = require('../models/Note');
import { isAuthFactory } from '../util';
import {getToken, isAuth, isAdmin } from '../util';

const router = express.Router();

router.post("/from", async (req, res) => {
    const newOrder = new Order({
        name: req.body.name,
        correo: req.body.correo,
        estatura: req.body.estatura,
        peso: req.body.peso,
        alergias: req.body.alergias,
        cintura: req.body.cintura,
        edad: req.body.edad,
        grasa: req.body.grasa,
        objetivo: req.body.objetivo,
    });
    const newOrderCreated = await newOrder.save();
    res.status(201).send({ message: "New Order Created", data: newOrderCreated });
    
});

router.get('/signin:correo', async (req, res) => {
    //const from = await Order.find({correo:req.params.correo});
    //res.send({signinUser});
    const from = await Order.find({correo:req.params.correo});
    
        res.json(from);
    //if (from) {
     //   res.send({from});
        

    //} else {
//res.status(401).send({ message: 'correo no encontrado .' });
    //}
});

router.get('/signin/Note:user', async (req, res) => {
    //const from = await Order.find({correo:req.params.correo});
    //res.send({signinUser});
    const note = await Note.find({user:req.params.user});
        res.json(note);
    //if (from) {
     //   res.send({from});
        

    //} else {
//res.status(401).send({ message: 'correo no encontrado .' });
    //}
});
router.get('/notes',isAuthFactory(async (req, res) => {
    const from = await Order.find({correo:req.user.email});
    
    res.json(from);
}));
    //} else {
//res.status(401).send({ message: 'correo no encontrado .' });
    //}

export default router;