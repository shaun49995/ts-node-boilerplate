import express from 'express';
import { mainController } from '../controllers/mainController';

export const functionRoutes = express.Router();

functionRoutes.get('/api/getCoffee', mainController);

// functionRoutes.get('/api/endpoint', authenticateRequest, mainController); endpoint with middleware added to authenticate request
