import { cn } from "@/utils";
import { useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import JobOrganisationInfo from "./JobOrganisationInfo";

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

const JobPopularCard = ({
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
		<TouchableOpacity onPress={() => router.push(`/jobs/${job_id}`)}>
			<View className={cn("rounded-xl px-4 py-3 bg-white w-72 overflow-hidden", className)}>
				<View>
					<Text className="text-xl font-bold" numberOfLines={1}>
						{job_title}
					</Text>
					<View className="flex-row gap-4 items-center">
						<Text className="text-slate-500">$40-50k/year</Text>
						<View className="bg-gray-300 p-[6px] rounded-lg">
							<Text className="">Full Time</Text>
						</View>
					</View>
					<View className="mt-12">
						<JobOrganisationInfo
							employer_logo={employer_logo}
							employer_name={employer_name}
							job_city={job_city}
							job_offer_expiration_datetime_utc={
								job_offer_expiration_datetime_utc
							}
						/>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};
export default JobPopularCard;
