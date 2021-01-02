import express from 'express';
import asyncWrapper from '../../../utils/async-wrapper';
import yelpService from '../../../services/yelp';

const yelpRouter = express.Router();

yelpRouter.get('/businesses/search', asyncWrapper(yelpService.businessSearch));
yelpRouter.get('/businesses/:businessId', asyncWrapper(yelpService.businessDetails));
yelpRouter.get('/businesses/:businessId/reviews', asyncWrapper(yelpService.businessReviews));

export default yelpRouter;
