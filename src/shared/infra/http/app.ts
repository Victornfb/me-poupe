import 'reflect-metadata';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import SwaggerUi from 'swagger-ui-express';
import { router } from '@shared/infra/http/routes';
import swaggerFile from '../../../swagger.json';
import { AppError } from '@shared/errors/AppError';
import { transports, format } from 'winston';
import { logger, responseWhitelist } from 'express-winston';

const app = express();

app.use(express.json());

app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerFile));

app.use(cors());

app.use(logger({
	transports: [
		new transports.Console(),
	],
	format: format.combine(
		format.cli(),
		format.timestamp(),
		format.printf((info) => {
			const { req, res } = info.meta;
			return `${info.timestamp} | ${req.method} ${res.statusCode} | URL: ${req.url} | Res: ${JSON.stringify(res.body)}`
		})
	),
	responseWhitelist: [...responseWhitelist, 'body'],
}));

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			message: err.message,
		});
	}

	return res.status(500).json({
		status: 'error',
		message: `Internal server error: ${err.message}`,
	});
})

export { app };