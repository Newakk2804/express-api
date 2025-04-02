import express from 'express';
import routers from './routes/main.mjs';

const app = express();
app.use(express.json());
app.use(routers);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running in PORT: ${PORT}`);
});
