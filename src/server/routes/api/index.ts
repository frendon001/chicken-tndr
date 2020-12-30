import express from 'express';
import yelp from './yelp';

const apiRouter = express.Router();

apiRouter.use('/yelp', yelp);

export default apiRouter;
