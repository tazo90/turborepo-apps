import { RequestHandler } from 'express';
import asyncHandler from '../lib/async-handler';

export const respond: RequestHandler = asyncHandler(async (req, res) => {
  if (Buffer.isBuffer(res.locals['payload'])) {
    return res.end(res.locals['payload']);
  } else if (res.locals['payload']) {
    return res.json(res.locals['payload']);
  } else {
    return res.status(204).end();
  }
});
