import express from 'express';
import routers from './routers/main.mjs';
import cookieParser from 'cookie-parser';
import session from 'express-session';

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
  })
);
app.use(routers);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running in PORT: ${PORT}`);
});
