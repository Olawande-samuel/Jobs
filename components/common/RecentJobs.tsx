import { View, Text, FlatList } from "react-native";
import JobRecentCard from "./JobRecentCard";
import { jobList } from "@/data";
const RecentJobs = () => {
	return (
		<View className="grow">
			<View className="flex-row justify-between items-center mb-8">
				<Text className="text-2xl font-bold">Recent Jobs</Text>
				<Text className="text-slate-500">Show all</Text>
			</View>		
		</View>
	);
};
export default RecentJobs;
