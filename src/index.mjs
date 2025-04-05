import mongoose from 'mongoose';
import { createApp } from './createApp.mjs';

mongoose
  .connect('mongodb://localhost:27017/express_tutorial')
  .then(() => console.log('Connected to Database'))
  .catch((err) => console.log(`Error: ${err}`));

const app = createApp();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running in PORT: ${PORT}`);
});
