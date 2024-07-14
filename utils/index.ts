import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import moment from "moment";

export function cn(...input: ClassValue[]) {
	return twMerge(clsx(input));
}

export function generateLogo(logo: string | undefined) {
	if (logo) {
		return logo;
	}
	return "https://reactnative.dev/img/tiny_logo.png";
}

export function getExpiryDate(date: string) {
	if (date) {
		const current = moment().to(date);
		return current;
	}
	return "unknown";
}
