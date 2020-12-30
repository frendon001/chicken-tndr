import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import helmet from 'helmet';
import routes from './routes';

const app = express();
// Set various headers for protection
app.use(helmet());
app.use(bodyParser.json());
// Allow cross-domain requests
app.use((_req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use('/', routes);

if (process.env.NODE_ENV === 'production') {
	// Serve production assets
	app.use(express.static(path.resolve(__dirname, '../../dist')));
	app.get('/*', (_req, res) => {
		res.sendFile(path.resolve(__dirname, '../../dist', 'generated.html'));
	});
}

// Error handling
process.on('uncaughtException', (error: Error) => {
	console.log(error);
	console.log('test');
	process.exit(1);
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(async (err: any, req: express.Request, res: express.Response, _next: express.NextFunction) => {
	if (err?.stack) {
		console.error(err.stack);
	}
	res.status(500).send(err?.response?.data?.error || err?.message || 'Error in request');
});

const PORT = process.env.PORT || 3030;
app.listen(PORT);

module.exports = app;
