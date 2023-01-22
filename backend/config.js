import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://straxes_tv:19631964EDD@cluster0.dbaj49j.mongodb.net/?retryWrites=true&w=majority',  
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'AfNlsUDpeZEi3lmRerA6CspkZ7rfggc-UAVabZ8LLClKaKhg1ElIiHWhnGue3M0sxZr7gjz3X_AzHynB',
  accessKeyId: process.env.accessKeyId || 'accessKeyId',
  secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
  SECRET: 'EGAq6f8KoOQGxjx5NAQD6ouzlu0CSI3smQWQT08Da2Cc789GD6Shjyuu7WsTVnFNOgHjSWaZfmJsgNUi'
};