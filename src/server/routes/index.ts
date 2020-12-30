import express from 'express';
import api from './api';

const routes = express.Router();

// server healthcheck route
routes.get('/healthcheck', (req, res: express.Response) => {
	res.send('OK');
});

routes.use('/api', api);

export default routes;
