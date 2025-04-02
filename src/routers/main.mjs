import { Router } from 'express';
import usersRouter from './users.mjs';
import productsRouter from './products.mjs';

const router = Router();

router.use(usersRouter);
router.use(productsRouter);

router.get('/', (req, res) => {
  res.status(201).send({ msg: 'Hello' });
});

export default router;
