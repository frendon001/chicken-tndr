import express from 'express';
import axios from 'axios';
import config from '../../../config';
import { IBusinessIdRequest } from './interfaces';

const getBusinessReviews = async (req: express.Request, res: express.Response): Promise<express.Response<never>> => {
	const { businessId }: IBusinessIdRequest = req.params as never;
	if (!businessId) {
		return res.status(400).json({ error: 'Business ID is required.' });
	}
	const detailsResult = await axios.get(`${config.yelp.uri}/businesses/${businessId}/reviews`, {
		headers: { Authorization: `Bearer ${config.yelp.key}` },
	});
	return res.status(200).json(detailsResult.data);
};

export default getBusinessReviews;
