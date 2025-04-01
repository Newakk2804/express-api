import express from 'express';

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.status(201).send({ msg: 'Hello' });
});

app.get('/api/users', (req, res) => {
  res.send([
    { id: 1, username: 'anson', displayName: 'Anson' },
    { id: 2, username: 'jack', displayName: 'Jack' },
    { id: 3, username: 'adam', displayName: 'Adam' },
  ]);
});

app.get('/api/products', (req, res) => {
  res.send([{ id: 123, name: 'chicken breast', price: 12.99 }]);
});

app.listen(PORT, () => {
  console.log(`Server running in PORT: ${PORT}`);
});
