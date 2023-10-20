import { json, urlencoded } from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { log } from 'logger';

import createApp from './app';
import { create } from 'domain';

export async function createServer() {
  // const app = express();
  // app
  //   .disable('x-powered-by')
  //   .use(morgan('dev'))
  //   .use(urlencoded({ extended: true }))
  //   .use(json())
  //   .use(cors())
  //   .get('/message/:name', (req, res) => {
  //     return res.json({ message: `hello ${req.params.name}` });
  //   })
  //   .get('/healthz', (req, res) => {
  //     return res.json({ ok: true });
  //   });

  // return app;

  const app = await createApp();

  return app;
}

export async function startServer() {
  const port = process.env.PORT || 3001;
  const server = await createServer();

  server.listen(port, () => {
    log(`api running on ${port}`);
  });
}
