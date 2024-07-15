import axios from "axios";

const baseInstance = axios.create({
	baseURL: "https://jsearch.p.rapidapi.com",
	headers: {
		"Content-Type": "application/json",
		"X-RapidAPI-Key": process.env.RAPID_API_KEY,
		"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
	},
});

export default baseInstance;
