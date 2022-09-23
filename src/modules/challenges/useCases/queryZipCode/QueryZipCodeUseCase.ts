import { IQueryZipCodeDTO } from "@modules/challenges/dtos/IQueryZipCodeDTO";
import { AppError } from "@shared/errors/AppError";
import axios from "axios";

interface IResponse {
	address: any;
	message?: string;
}

class QueryZipCodeUseCase {

	async execute({zipcode}: IQueryZipCodeDTO): Promise<IResponse> {
		if (!zipcode) {
			throw new AppError('Required field missing.');
		}

		const formattedZipCode = zipcode.replace(/[^0-9]/g, '');

		if (formattedZipCode.length !== 8) {
			throw new AppError('Invalid format, must be 8 characters long.');
		}

		const result = await axios
			.get(`https://viacep.com.br/ws/${formattedZipCode}/json`)
			.catch(() => {
				throw new AppError('Error while querying viacep service.');
			});

		if (result.data.erro) {
			throw new AppError('Zipcode not found.');
		}

		return {
			address: result.data,
			message: result.data.bairro === ''
				? 'Neighborhood not found for the given zipcode.'
				: undefined
		};
	}

}

export { QueryZipCodeUseCase };