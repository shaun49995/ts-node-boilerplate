import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

// optional middleware for adding an auth token

export function authenticateRequest(req: Request, res: Response, next: NextFunction): void {
	const authHeader = req.headers.authorization;
	const token = authHeader && authHeader.split(' ')[1];

	if (token == null) {
		res.sendStatus(401);
		return;
	}

	if (token !== process.env.AUTHENTICATION_TOKEN) {
		res.sendStatus(403);
		return;
	}

	next();
}
