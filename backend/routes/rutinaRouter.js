import express from 'express';
import Rutina from '../models/rutina';
import { isAuthFactory } from '../util';
import {getToken, isAuth, isAdmin } from '../util';

const router = express.Router();

router.post("/adm",async (req, res) => {
    const newRutina = new Rutina({

        Dia1:req.body.Dia1,
        D1E1: req.body.D1E1,
        D1S1: req.body.D1S1,
        D1R1: req.body.D1R1,

        D1R2: req.body.D1R1,
        D1S2: req.body.D1S2,
        D1R2: req.body.D1R2,

        D1E3: req.body.D1E3,
        D1S3: req.body.D1S3,
        D1R3: req.body.D1R3,

        D1E4: req.body.D1E4,
        D1S4: req.body.D1S4,
        D1R4: req.body.D1R4,

        D1E5: req.body.D1E5,
        D1S5: req.body.D1S5,
        D1R5: req.body.D1R5,

        D1E6: req.body.D1E6,
        D1S6: req.body.D1S6,
        D1R6: req.body.D1R6,

        D1E7: req.body.D1E7,
        D1S7: req.body.D1S7,
        D1R7: req.body.D1R7,

        D1E8: req.body.D1E8,
        D1S8: req.body.D1S8,
        D1R8: req.body.D1R8,
        // dia 2
        Dia2:req.body.Dia2,
        D2E1: req.body.D2E1,
        D2S1: req.body.D2S1,
        D2R1: req.body.D2R1,

        D2E2: req.body.D2E2,
        D2S2: req.body.D2S2,
        D2R2: req.body.D2R2,

        D2E3: req.body.D2E3,
        D2S3: req.body.D2S3,
        D2R3: req.body.D2R3,

        D2E4: req.body.D2E4,
        D2S4: req.body.D2S4,
        D2R4: req.body.D2R4,

        D2E5: req.body.D2E5,
        D2S5: req.body.D2S5,
        D2R5: req.body.D2R5,

        D2E6: req.body.D2E6,
        D2S6: req.body.D2S6,
        D2R6: req.body.D2R6,

        D2E7: req.body.D2E7,
        D2S7: req.body.D2S7,
        D2R7: req.body.D2R7,

        D2E8: req.body.D2E8,
        D2S8: req.body.D2E8,
        D2R8: req.body.D2E8,
        //DIA 3
        Dia3:req.body.Dia3,
        D3E1: req.body.D3E1,
        D3S1: req.body.D3S1,
        D3R1: req.body.D3R1,

        D3E2: req.body.D3E2,
        D3S2: req.body.D3S2,
        D3R2: req.body.D3R2,

        D3E3: req.body.D3E3,
        D3S3: req.body.D3S3,
        D3R3: req.body.D3R3,

        D3E4: req.body.D3E4,
        D3S4: req.body.D3S4,
        D3R4: req.body.D3R4,

        D3E5: req.body.D3E5,
        D3S5: req.body.D3S5,
        D3R5: req.body.D3R5,

        D3E6: req.body.D3E6,
        D3S6: req.body.D3S6,
        D3R6: req.body.D3R6,

        D3E7: req.body.D3E7,
        D3S7: req.body.D3S7,
        D3R7: req.body.D3R7,

        D3E8: req.body.D3E8,
        D3S8: req.body.D3E8,
        D3R8: req.body.D3E8,
        //DIA 4
        Dia4:req.body.Dia4,
        D4E1: req.body.D4E1,
        D4S1: req.body.D4S1,
        D4R1: req.body.D4R1,

        D4E2: req.body.D4E2,
        D4S2: req.body.D4S2,
        D4R2: req.body.D4R2,

        D4E3: req.body.D4E3,
        D4S3: req.body.D4S3,
        D4R3: req.body.D4R3,

        D4E4: req.body.D4E4,
        D4S4: req.body.D4S4,
        D4R4: req.body.D4R4,

        D4E5: req.body.D4E5,
        D4S5: req.body.D4S5,
        D4R5: req.body.D4R5,

        D4E6: req.body.D4E6,
        D4S6: req.body.D4S6,
        D4R6: req.body.D4R6,

        D4E7: req.body.D4E7,
        D4S7: req.body.D4S7,
        D4R7: req.body.D4R7,

        D4E8: req.body.D4E8,
        D4S8: req.body.D4E8,
        D4R8: req.body.D4E8,
        //DIA 5
        Dia5:req.body.Dia5,
        D5E1: req.body.D5E1,
        D5S1: req.body.D5S1,
        D5R1: req.body.D5R1,

        D5E2: req.body.D5E2,
        D5S2: req.body.D5S2,
        D5R2: req.body.D5R2,

        D5E3: req.body.D5E3,
        D5S3: req.body.D5S3,
        D5R3: req.body.D5R3,

        D5E4: req.body.D5E4,
        D5S4: req.body.D5S4,
        D5R4: req.body.D5R4,

        D5E5: req.body.D5E5,
        D5S5: req.body.D5S5,
        D5R5: req.body.D5R5,

        D5E6: req.body.D5E6,
        D5S6: req.body.D5S6,
        D5R6: req.body.D5R6,

        D5E7: req.body.D5E7,
        D5S7: req.body.D5S7,
        D5R7: req.body.D5R7,

        D5E8: req.body.D5E8,
        D5S8: req.body.D5E8,
        D5R8: req.body.D5E8,
        correo: req.body.correo,

        
    });
    const newOrderRutina = await newRutina.save();
    res.status(201).send({ message: "se creo una rutina", data: newOrderRutina });
    
});

router.get('/adm',isAuthFactory(async (req, res) => {
    const rut = await Rutina.find({correo:req.user.email});
        //res.json(rut);
        res.send(rut);
})); 
router.get('/signin:correo', async (req, res) => {

    const rut = await Rutina.find({correo:req.params.correo});
    
        res.json(rut);

});
export default router;