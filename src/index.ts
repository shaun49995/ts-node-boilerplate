import express, { Express } from 'express';
import { functionRoutes, staticRoutes } from './routes/index';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = parseInt(process.env.PORT || '8080');

app.use(express.json());
app.use(express.static('public'));

app.use(functionRoutes);
app.use(staticRoutes);

app.listen(port, () => {
	console.log(`[server]: server is listening on port ${port}`);
});
