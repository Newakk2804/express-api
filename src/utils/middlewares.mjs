import mockUsers from './constants.mjs';
import { User } from '../mongoose/schemas/user.mjs';

export const loggingMiddleware = (req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
};

export const resolveIndexByUserId = async (req, res, next) => {
  const {
    params: { id },
  } = req;

  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return res.sendStatus(400);

  const findUserIndex = await User.findIndex((user) => user.id === parsedId);
  if (findUserIndex === -1) return res.sendStatus(404);

  req.findUserIndex = findUserIndex;

  next();
};
