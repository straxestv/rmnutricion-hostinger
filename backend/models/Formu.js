import mongoose from 'mongoose';


const formSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    edad:{ type: String, required: true },
    estatura:{ type: String, require:true},
    peso:{ type: String, default: 0, required: true },
    alergias:{ type: String, require:true},
    cintura:{ type: String, require:true},
    telefono:{ type: String, require:true},
    correo:{ type: String, require:true},
    grasa :{ type: String, default: 0, required: false },
    objetivo:{ type: String, require:true},
    },{
      timestamps: true
  })/*
const ordenFomShema = new mongoose.Schema({
  userr: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  form:formSchema,
  Note:[ordenNoteShema],

});
*/
const fromModel = mongoose.model('Form', formSchema, );

export default fromModel;