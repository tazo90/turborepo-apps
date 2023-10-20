import express from 'express';
import asyncHandler from '../lib/async-handler';
import { respond } from '../middleware/respond';
import { UsersService } from '../services/users';

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

router.get(
  '/:pk',
  asyncHandler(async (req, res, next) => {
    const service = new UsersService();

    const items = await service.getUserById(req.params['pk'], req.query);

    res.locals['payload'] = { data: items };

    return next();
  }),
  respond,
);

export default router;
