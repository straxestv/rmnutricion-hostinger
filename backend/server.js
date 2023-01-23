import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import orderRoute from './routes/orderRoute';
import uploadRoute from './routes/uploadRoute';
import orderFromRouter from './routes/orderFromRouter';
import imagesRoute from "./routes/imagesRouter";
import rutinaRouter from "./routes/rutinaRouter"



import cors from 'cors';


const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    
  })
  .catch((error) => console.log(error.reason));

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/Img',imagesRoute);
app.use('/api/uploads', uploadRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
app.use('/api/ordersNote', orderFromRouter);
app.use('/api/rutina', rutinaRouter);
app.use('/api/notes', require('./routes/notes'));
app.use('/api/adm/notes', require('./routes/userAdmNote'));
app.use('/api/adm/users', require('./routes/userAdm'));
app.get('/api/config/paypal', (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});
app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
app.use(express.static(path.join(__dirname, '/../frontend/public')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/public/index.html`));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
