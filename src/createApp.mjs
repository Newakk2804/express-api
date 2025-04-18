import express from 'express';
import routers from './routers/main.mjs';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import './strategies/local-strategy.mjs';
// import './strategies/discord-strategy.mjs';

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use(cookieParser('helloworld'));
  app.use(
    session({
      secret: 'express-server',
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 60000 * 60,
      },
      store: MongoStore.create({
        client: mongoose.connection.getClient(),
      }),
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(routers);

  return app;
}
