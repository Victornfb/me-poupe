import { Request, Response } from "express";
import { container } from "tsyringe";
import { CalculateAverageUseCase } from "@modules/challenges/useCases/calculateAverage/CalculateAverageUseCase";

class CalculateAverageController {

	async handle(req: Request, res: Response): Promise<Response> {
		const {
			firstNumber,
			secondNumber
		} = req.query;

		const calculateAverageUseCase = container.resolve(CalculateAverageUseCase);

		const average = await calculateAverageUseCase.execute({
			firstNumber: firstNumber as string,
			secondNumber: secondNumber as string
		});

		return res.status(200).json(average);
	}
}

export { CalculateAverageController }