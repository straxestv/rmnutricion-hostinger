const { Schema, model } = require('mongoose');

const rutinaSchema = new Schema(
    {
        // dia 1
        Dia1:{type:String},
        D1E1:{type:String},
        D1S1:{type:String},
        D1R1:{type:String},

        D1E2:{type:String},
        D1S2:{type:String},
        D1R2:{type:String},

        D1E3:{type:String},
        D1S3:{type:String},
        D1R3:{type:String},

        D1E4:{type:String},
        D1S4:{type:String},
        D1R4:{type:String},

        D1E5:{type:String},
        D1S5:{type:String},
        D1R5:{type:String},

        D1E6:{type:String},
        D1S6:{type:String},
        D1R6:{type:String},

        D1E7:{type:String},
        D1S7:{type:String},
        D1R7:{type:String},

        D1E8:{type:String},
        D1S8:{type:String},
        D1R8:{type:String},
        // dia 2
        Dia2:{type:String},
        D2E1:{type:String},
        D2S1:{type:String},
        D2R1:{type:String},

        D2E2:{type:String},
        D2S2:{type:String},
        D2R2:{type:String},

        D2E3:{type:String},
        D2S3:{type:String},
        D2R3:{type:String},

        D2E4:{type:String},
        D2S4:{type:String},
        D2R4:{type:String},

        D2E5:{type:String},
        D2S5:{type:String},
        D2R5:{type:String},

        D2E6:{type:String},
        D2S6:{type:String},
        D2R6:{type:String},

        D2E7:{type:String},
        D2S7:{type:String},
        D2R7:{type:String},

        D2E8:{type:String},
        D2S8:{type:String},
        D2R8:{type:String},
        
        //dia 3
        Dia3:{type:String},
        D3E1:{type:String},
        D3S1:{type:String},
        D3R1:{type:String},

        D3E2:{type:String},
        D3S2:{type:String},
        D3R2:{type:String},

        D3E3:{type:String},
        D3S3:{type:String},
        D3R3:{type:String},

        D3E4:{type:String},
        D3S4:{type:String},
        D3R4:{type:String},

        D3E5:{type:String},
        D3S5:{type:String},
        D3R5:{type:String},

        D3E6:{type:String},
        D3S6:{type:String},
        D3R6:{type:String},

        D3E7:{type:String},
        D3S7:{type:String},
        D3R7:{type:String},

        D3E8:{type:String},
        D3S8:{type:String},
        D3R8:{type:String},
        //DIA 4
        Dia4:{type:String},
        D4E1:{type:String},
        D4S1:{type:String},
        D4R1:{type:String},

        D4E2:{type:String},
        D4S2:{type:String},
        D4R2:{type:String},

        D4E3:{type:String},
        D4S3:{type:String},
        D4R3:{type:String},

        D4E4:{type:String},
        D4S4:{type:String},
        D4R4:{type:String},

        D4E5:{type:String},
        D4S5:{type:String},
        D4R5:{type:String},

        D4E6:{type:String},
        D4S6:{type:String},
        D4R6:{type:String},

        D4E7:{type:String},
        D4S7:{type:String},
        D4R7:{type:String},

        D4E8:{type:String},
        D4S8:{type:String},
        D4R8:{type:String},
        //DIA 5
        Dia5:{type:String},
        D5E1:{type:String},
        D5S1:{type:String},
        D5R1:{type:String},

        D5E2:{type:String},
        D5S2:{type:String},
        D5R2:{type:String},

        D5E3:{type:String},
        D5S3:{type:String},
        D5R3:{type:String},

        D5E4:{type:String},
        D5S4:{type:String},
        D5R4:{type:String},

        D5E5:{type:String},
        D5S5:{type:String},
        D5R5:{type:String},

        D5E6:{type:String},
        D5S6:{type:String},
        D5R6:{type:String},

        D5E7:{type:String},
        D5S7:{type:String},
        D5R7:{type:String},

        D5E8:{type:String},
        D5S8:{type:String},
        D5R8:{type:String},

        correo: {
            type: String,
            required: true,
        },
    }, {
        timestamps: true
    });

module.exports = model('Rutina', rutinaSchema);