import { RequestHandler } from 'express';
import { RouteNotFoundError } from '../errors/errors/route-not-found';

const notFound: RequestHandler = async (req, res, next) => {
  try {
    next(new RouteNotFoundError({ path: req.path }));
  } catch (err: any) {
    next(err);
  }
};

export default notFound;
