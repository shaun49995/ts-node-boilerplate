import express, { Request, Response } from 'express';

export const staticRoutes = express.Router();

staticRoutes.get('/', (req: Request, res: Response) => {
	res.send('🟢 Server is running...');
});
