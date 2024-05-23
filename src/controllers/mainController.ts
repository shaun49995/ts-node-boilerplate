import { Request, Response } from 'express';
import { getCoffee } from '../data/getCoffee';

export const mainController = async (req: Request, res: Response) => {
	try {
		const data = await getCoffee();
		console.log('🟢 Data fetched successfully');
		res.status(200).send({ message: 'Success', data: data });
	} catch (error) {
		console.error('🔴 Request Failed', error);
		res.status(500).send({ message: 'Request Failed', error: 'An error occurred' });
	}
};
