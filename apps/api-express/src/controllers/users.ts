import express from 'express';
import asyncHandler from '../lib/async-handler';
import { respond } from '../middleware/respond';

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    // res.json({ message: `hello ${req.params.name}` });
    res.locals['payload'] = { ok: '1' };

    return next();
  }),
  respond,
);

export default router;
