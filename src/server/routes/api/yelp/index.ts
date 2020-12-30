import express from 'express';
import asyncWrapper from '../../../utils/async-wrapper';
import bussinessSearch from '../../../services/yelp/business-search';

const yelpRouter = express.Router();

// server for dummy API route
yelpRouter.get('/businesses/search', asyncWrapper(bussinessSearch));

export default yelpRouter;
