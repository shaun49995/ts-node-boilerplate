import dotenv from 'dotenv';

dotenv.config();

export const getCoffee = async () => {
	try {
		const response = await fetch(`https://${process.env.SERVER_URL}/coffee/hot`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}, ${response.statusText}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
