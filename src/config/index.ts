import devConfig from './dev';

export default {
	yelp: {
		key: devConfig?.YELP_API_KEY || process.env.YELP_API_KEY,
		uri: 'https://api.yelp.com/v3',
	},
};
