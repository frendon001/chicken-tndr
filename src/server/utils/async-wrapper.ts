import express from 'express';

export default (
	fn: (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<unknown>,
) => async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<unknown> => {
	return fn(req, res, next).catch(err => {
		next(err);
	});
};
