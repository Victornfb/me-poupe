import { ICalculateAverageDTO } from "@modules/challenges/dtos/ICalculateAverageDTO";
import { AppError } from "@shared/errors/AppError";

interface IResponse {
	average: number;
}

class CalculateAverageUseCase {

	async execute({firstNumber, secondNumber}: ICalculateAverageDTO): Promise<IResponse> {
		if (!firstNumber || !secondNumber) {
			throw new AppError('Required field missing.');
		}

		if (isNaN(Number(firstNumber)) || isNaN(Number(secondNumber))) {
			throw new AppError('Arguments must be numbers.');
		}

		const average = Math.round((Number(firstNumber) + Number(secondNumber)) / 2);

		return { average };
	}
}

export { CalculateAverageUseCase }