// import { Server } from "http";
import app from './app';
import mongoose from 'mongoose';
import config from './App/config';

// let server: Server;

async function bootStrap() {
  mongoose.connect(config.DB_URL as string);
  app.listen(config.PORT, () =>
    console.log(
      `Server Connected Successfully, and Running at the port :${config.PORT}!`,
    ),
  );
}

bootStrap();
