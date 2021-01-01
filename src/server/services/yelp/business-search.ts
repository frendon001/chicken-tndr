import express from 'express';
import axios from 'axios';
import config from '../../../config';
import { IGetSearchBusinessRequest } from './interfaces';

const SEARCH_LIMIT = 10;

const getBusinessSearch = async (req: express.Request, res: express.Response): Promise<express.Response<never>> => {
	const { term, location, offset, openNow, price, sortBy }: IGetSearchBusinessRequest = req.query as never;
	if (!location) {
		return res.status(400).json({ error: 'Location is required.' });
	}
	console.log('test');
	let searchQuery = `location=${location}&limit=${SEARCH_LIMIT}`;
	// TODO: Refactor into a helper function
	searchQuery += term ? `&term=${term}` : '';
	searchQuery += offset ? `&offset=${offset}` : '';
	searchQuery += openNow ? `&open_now=${openNow}` : '';
	searchQuery += price ? `&price=${price}` : '';
	searchQuery += sortBy ? `&sort_by=${sortBy}` : '';
	const searchResult = await axios.get(`${config.yelp.uri}/businesses/search?${searchQuery}`, {
		headers: { Authorization: `Bearer ${config.yelp.key}` },
	});
	return res.status(200).json(searchResult.data);
};

export default getBusinessSearch;
