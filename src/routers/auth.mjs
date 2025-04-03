import { Router } from 'express';
import mockUsers from '../utils/constants.mjs';

const router = Router();

router.post('/api/auth', (req, res) => {
  const {
    body: { username, password },
  } = req;

  const findUser = mockUsers.find((user) => user.username === username);
  if (!findUser || findUser.password !== password)
    return res.status(401).send({ msg: 'Bad credentials' });

  req.session.user = findUser;
  return res.status(200).send(findUser);
});

router.get('/api/auth/status', (req, res) => {
  req.sessionStore.get(req.session.id, (err, sessionData) => {
    if (err) {
      console.log(err);
      throw err;
    }

    console.log(sessionData);
  });
  return req.session.user
    ? res.status(200).send(req.session.user)
    : res.status(401).send({ msg: 'Not authenticated' });
});

export default router;
