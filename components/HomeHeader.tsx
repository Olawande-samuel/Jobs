import useDataQuery from "@/hooks/useDataQuery";
import Endpoints from "@/utils/endpoints";
import { ActivityIndicator, View } from "react-native";
import Hero from "./common/Hero";
import Search from "./common/Search";
import PopularJobs from "./common/PopularJobs";
import RecentJobs from "./common/RecentJobs";
import useQueryRecentJobs from "@/hooks/useQueryRecentJobs";

export default function HomeHeader() {
	const { isLoading, data, error } = useQueryRecentJobs("developer&page=1");
	return (
		<View className="grow shrink-0 bg-[#eee] px-4">
			<View>
				<Hero />
			</View>
			<View className="mt-6">
				<Search />
			</View>
			<View className="mt-12">
				{isLoading ? (
					<ActivityIndicator />
				) : (
					<PopularJobs data={data?.data?.data} />
				)}
			</View>
			<View className="mt-12 flex-1">
				<RecentJobs />
			</View>
		</View>
	);
}
