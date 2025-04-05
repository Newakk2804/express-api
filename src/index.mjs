import express from 'express';
import routers from './routers/main.mjs';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
// import './strategies/local-strategy.mjs';
import './strategies/discord-strategy.mjs';

const app = express();

mongoose
  .connect('mongodb://localhost:27017/express_tutorial')
  .then(() => console.log('Connected to Database'))
  .catch((err) => console.log(`Error: ${err}`));

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

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running in PORT: ${PORT}`);
});

// client_secret = xrl-VCdLLNREY-Z_k74kR7oUvByK5SXF
// client_id = 1358013498939936860
