import { Router } from 'express';
import { challengesRoutes } from './challenges.routes';

const router = Router();

router.use(challengesRoutes);

export { router };