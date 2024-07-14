import { getExpiryDate } from "@/utils";
import { Link, useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
interface Props {
	job_id: string;
	employer_name: string;
	employer_logo: string;
	job_city: string;
	job_posted_at_datetime_utc: string;
	job_offer_expiration_datetime_utc: string;
	job_is_remote: boolean;
	job_description: string;
	job_title: string;
	job_employment_type: string;
	job_apply_link: string;
	className?: string;
}

const JobRecentCard = ({
	className,
	employer_logo,
	employer_name,
	job_city,
	job_title,
	job_offer_expiration_datetime_utc,
	job_id,
}: Props) => {
	const router = useRouter();
	return (
		<TouchableOpacity
			onPress={() => router.push(`/jobs/${job_id}`)}
			className="flex flex-row gap-4 bg-white p-5 rounded-xl mx-4"
		>
			<View>
				<Image src={employer_logo} className="h-14 w-14 rounded-xl" />
			</View>
			<View
				className="grow"
			>
				<Text className="font-semibold text-xl" numberOfLines={1}>
					{job_title}
				</Text>
				<Text className="text-slate-500">{job_city}</Text>
				{job_offer_expiration_datetime_utc && (
					<Text className="ml-auto" numberOfLines={1}>
						Expires {getExpiryDate(job_offer_expiration_datetime_utc)}
					</Text>
				)}
			</View>
		</TouchableOpacity>
	);
};
export default JobRecentCard;
