import { json, urlencoded } from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import authRouter from './controllers/auth';
import usersRouter from './controllers/users';

export default async function createApp() {
  const app = express();

  app
    .disable('x-powered-by')
    .use(morgan('dev'))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors());

  app.use('/auth', authRouter);
  app.use('/users', usersRouter);

  // .get('/message/:name', (req, res) => {
  //   return res.json({ message: `hello ${req.params.name}` });
  // })
  // .get('/healthz', (req, res) => {
  //   return res.json({ ok: true });
  // });

  return app;
}
