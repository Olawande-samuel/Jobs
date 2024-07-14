import { generateLogo, getExpiryDate } from "@/utils";
import { Image, Text, View } from "react-native";

interface Props {
	employer_logo?: string;
	employer_name: string;
	job_city: string;
	job_offer_expiration_datetime_utc: string;
}
const JobOrganisationInfo = ({
	employer_logo,
	employer_name,
	job_city,
	job_offer_expiration_datetime_utc,
}: Props) => {
	return (
		<View className="flex-row gap-4">
			<View className=" bg-white">
				<Image
					source={{
						uri: generateLogo(employer_logo),
					}}
					className="h-14 w-14 rounded-xl"
				/>
			</View>
			<View className="flex-1">
				<Text className="font-semibold" numberOfLines={1}>
					{employer_name}
				</Text>
				<Text className="text-slate-500 " numberOfLines={1}>
					{job_city}
				</Text>
				<View>
					{job_offer_expiration_datetime_utc && (
						<Text className="ml-auto" numberOfLines={1}>
							Expires {getExpiryDate(job_offer_expiration_datetime_utc)}
						</Text>
					)}
				</View>
			</View>
		</View>
	);
};
export default JobOrganisationInfo;
