import { AppError } from "@shared/errors/AppError";
import { CalculateAverageUseCase } from "./CalculateAverageUseCase";

let calculateAverageUseCase: CalculateAverageUseCase;

describe('Calculate Average Use Case', () => {

	beforeAll(() =>{
		calculateAverageUseCase = new CalculateAverageUseCase();
	});

	it('should be able to calculate an average using half round up', async () => {
		const result = await calculateAverageUseCase.execute({
			firstNumber: '5.5',
			secondNumber: '2'
		});

		expect(result).toHaveProperty('average');
		expect(result.average).toEqual(4);
	});

	it('should not be able to calculate the average of invalid arguments', async () => {
		await expect(
			calculateAverageUseCase.execute({
				firstNumber: 'fake-number',
				secondNumber: '2'
			})
		).rejects.toEqual(new AppError('Arguments must be numbers.'));
	});

	it('should not be able to calculate the average if both arguments are not passed', async () => {
		await expect(
			calculateAverageUseCase.execute({
				firstNumber: '2',
				secondNumber: undefined
			})
		).rejects.toEqual(new AppError('Required field missing.'));
	});

})