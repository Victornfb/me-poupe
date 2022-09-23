import { Request, Response } from "express";
import { container } from "tsyringe";
import { QueryZipCodeUseCase } from "./QueryZipCodeUseCase";

class QueryZipCodeController {

	async handle(req: Request, res: Response): Promise<Response> {
		const { zipcode } = req.query;

		const queryZipCodeUseCase = container.resolve(QueryZipCodeUseCase);

		const average = await queryZipCodeUseCase.execute({
			zipcode: zipcode as string
		});

		return res.status(200).json(average);
	}

}

export { QueryZipCodeController };