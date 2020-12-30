import express from 'express';
import axios from 'axios';
import config from '../../../config';

const getBusinessSearch = async (req: express.Request, res: express.Response): Promise<express.Response<never>> => {
	const { term, location } = req.query;
	if (!location) {
		return res.status(400).json({ error: 'Location is required.' });
	}
	const searchResult = await axios.get(`${config.yelp.uri}/businesses/search?term=${term}&location=${location}`, {
		headers: { Authorization: `Bearer ${config.yelp.key}` },
	});
	return res.status(200).json(searchResult.data);
};

export default getBusinessSearch;
