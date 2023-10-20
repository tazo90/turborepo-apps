import express from 'express';
import asyncHandler from '../lib/async-handler';

const router = express.Router();

router.get(
  '/login',
  asyncHandler(async (req, res, next) => {
    console.log('Login');

    res.json({ auth: 'Authenticated' });

    return next();
  }),
);

export default router;
