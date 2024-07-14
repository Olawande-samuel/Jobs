import { jobList } from "@/data";
import { View, Text, FlatList } from "react-native";
import JobPopularCard from "./JobPopularCard";
import { Link } from "expo-router";

const PopularJobs = ({ data }: { data: any[] }) => {
	return (
		<View>
			<View className="flex-row justify-between items-center mb-8">
				<Text className="text-2xl font-bold">Popular Jobs</Text>
				<Link href="popular">
					<Text className="text-slate-500">Show all</Text>
				</Link>
			</View>
			<FlatList
				data={data}
				renderItem={({ item }) => <JobPopularCard {...item} />}
				keyExtractor={(item) => item.job_title + item.job_id}
				showsHorizontalScrollIndicator={false}
				horizontal
				contentContainerStyle={{ columnGap: 20 }}
			/>
		</View>
	);
};
export default PopularJobs;
