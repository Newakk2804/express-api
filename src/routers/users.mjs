import { Router } from 'express';
import { matchedData, validationResult, checkSchema } from 'express-validator';
import { createUserValidationSchema } from '../utils/validationSchemas.mjs';
import mockUsers from '../utils/constants.mjs';
import { resolveIndexByUserId } from '../utils/middlewares.mjs';
import { User } from '../mongoose/schemas/user.mjs';
import { hashPassword } from '../utils/helpers.mjs';
import { createUserHandler, getUserByIdHandler } from '../handlers/users.mjs';

const router = Router();

router.get('/api/users', (req, res) => {
  const {
    query: { filter, value },
  } = req;

  if (filter && value) return res.send(mockUsers.filter((user) => user[filter].includes(value)));
  return res.send(mockUsers);
});

router.post('/api/users', checkSchema(createUserValidationSchema), createUserHandler);

router.get('/api/users/:id', resolveIndexByUserId, getUserByIdHandler);

router.put('/api/users/:id', resolveIndexByUserId, (req, res) => {
  const { body, findUserIndex } = req;
  mockUsers[findUserIndex] = { id: mockUsers[findUserIndex].id, ...body };
  return res.sendStatus(200);
});

router.patch('/api/users/:id', resolveIndexByUserId, (req, res) => {
  const { body, findUserIndex } = req;
  mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body };
  return res.sendStatus(200);
});

router.delete('/api/users/:id', resolveIndexByUserId, (req, res) => {
  const { findUserIndex } = req;
  mockUsers.splice(findUserIndex, 1);
  return res.sendStatus(200);
});

export default router;
