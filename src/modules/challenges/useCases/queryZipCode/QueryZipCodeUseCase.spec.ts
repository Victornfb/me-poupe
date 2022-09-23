import { AppError } from "@shared/errors/AppError";
import { QueryZipCodeUseCase } from "./QueryZipCodeUseCase";

let queryZipCodeUseCase: QueryZipCodeUseCase;

describe('Query ZipCode Use Case', () => {

	beforeAll(() =>{
		queryZipCodeUseCase = new QueryZipCodeUseCase();
	});

	it('should be able to query a zipcode', async () => {
		const result = await queryZipCodeUseCase.execute({
			zipcode: '01311000',
		});

		expect(result).toHaveProperty('address');
		expect(result.address.logradouro).toEqual('Avenida Paulista');
		expect(result.address.bairro).toEqual('Bela Vista');
	});

	it('should be able to query a zipcode without a neighborhood', async () => {
		const result = await queryZipCodeUseCase.execute({
			zipcode: '18150000',
		});

		expect(result).toHaveProperty('address');
		expect(result.address.bairro).toEqual('');
		expect(result).toHaveProperty('message');
		expect(result.message).toEqual('Neighborhood not found for the given zipcode.');
	});

	it('should not be able to query a zipcode if argument is not passed', async () => {
		await expect(
			queryZipCodeUseCase.execute({
				zipcode: undefined
			})
		).rejects.toEqual(new AppError('Required field missing.'));
	});

	it('should not be able to query a zipcode with invalid arguments', async () => {
		await expect(
			queryZipCodeUseCase.execute({
				zipcode: 'invalid-zipcode'
			})
		).rejects.toEqual(new AppError('Invalid format, must be 8 characters long.'));
	});

	it('should not be able to query an invalid zipcode', async () => {
		await expect(
			queryZipCodeUseCase.execute({
				zipcode: '00000000'
			})
		).rejects.toEqual(new AppError('Zipcode not found.'));
	});

})