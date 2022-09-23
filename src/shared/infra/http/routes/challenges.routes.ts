import { CalculateAverageController } from '@modules/challenges/useCases/calculateAverage/CalculateAverageController';
import { QueryZipCodeController } from '@modules/challenges/useCases/queryZipCode/QueryZipCodeController';
import { Router } from 'express';

const challengesRoutes = Router();

const calculateAverageController = new CalculateAverageController();
const queryZipCodeController = new QueryZipCodeController();

challengesRoutes.get('/average', calculateAverageController.handle);
challengesRoutes.get('/address', queryZipCodeController.handle);

export { challengesRoutes };

