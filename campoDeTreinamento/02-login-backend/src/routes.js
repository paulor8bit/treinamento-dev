import { Router } from 'express';
import SessionController from './app/controllers/SessionController';

import UserController from './app/controllers/UserController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// adcionar manual
// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Paulo Ricardo',
//     email: 'thunder.momon@gmail.com',
//     password_hash: 'Atack!',
//   });
//   return res.json(user);
// });

routes.post('/users', UserController.store);
// rota de login
routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);

routes.put('/users', UserController.update);
export default routes;
