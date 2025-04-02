import { Router } from 'express';
import { loggingMiddleware } from '../utils/middlewares.mjs';

const router = Router();

router.use(loggingMiddleware);

router.get('/api/products', (req, res) => {
  res.send([{ id: 123, name: 'chicken breast', price: 12.99 }]);
});

export default router;
