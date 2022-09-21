import { CalculateAverageController } from '@modules/challenges/useCases/calculateAverage/CalculateAverageController';
import { Router } from 'express';

const challengesRoutes = Router();

const calculateAverageController = new CalculateAverageController();

challengesRoutes.get('/average', calculateAverageController.handle);

export { challengesRoutes };

