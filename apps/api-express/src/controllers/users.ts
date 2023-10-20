import express from 'express';
import asyncHandler from '../lib/async-handler';

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    console.log('DDD');

    res.json({ message: `hello ${req.params.name}` });

    return next();
  }),
);

export default router;
