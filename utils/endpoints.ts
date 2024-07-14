import { AxiosError, AxiosResponse } from "axios";
import baseInstance from "./axios";

export default class Endpoints {
	async getRecentJobs(
		query: string,
		date_posted: string
	): Promise<AxiosResponse | AxiosError> {
		try {
			const response = await baseInstance.get(
				`/search?query=${query}&date_posted=${date_posted}`
			);
			return response;
		} catch (error) {
			throw error;
		}
	}
	async getJob(id: string): Promise<AxiosResponse | AxiosError> {
		try {
			const response = await baseInstance.get(
				`/job-details?job_id=${id}&extended_publisher_details=false`
			);
			return response;
		} catch (error) {
			throw error;
		}
	}

	async findJobs(query: string): Promise<AxiosResponse | AxiosError> {
		try {
			return await baseInstance.get(
				`/search?query=${query}&page=1&num_pages=1`
			);
		} catch (error) {
			throw error;
		}
	}
}
