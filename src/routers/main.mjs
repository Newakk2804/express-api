import { Router } from 'express';
import usersRouter from './users.mjs';
import productsRouter from './products.mjs';
import authRouter from './auth.mjs';
import cartRouter from './cart.mjs';
import { loggingMiddleware } from '../utils/middlewares.mjs';

const router = Router();

router.use(loggingMiddleware);

router.use(usersRouter);
router.use(productsRouter);
router.use(authRouter);
router.use(cartRouter);

router.get('/', (req, res) => {
  res.cookie('hello', 'world', { maxAge: 60000 * 60, signed: true });
  res.status(201).send({ msg: 'Hello' });
});

export default router;
