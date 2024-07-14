import Back from "@/components/common/Back";
import JobPopularCard from "@/components/common/JobPopularCard";
import PopularJobs from "@/components/common/PopularJobs";
import Pagination from "@/components/Pagination";
import useQueryRecentJobs from "@/hooks/useQueryRecentJobs";
import { Stack } from "expo-router";
import { useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	ActivityIndicator,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
const AllPopularJobs = () => {
	const [page, setPage] = useState(1);
	const { isLoading, data, error } = useQueryRecentJobs(
		`developer&page=${page}`,
		"all"
	);
	function handlePage(type: string) {
		if (type === "prev") {
			if (page === 1) {
				return;
			}
			setPage(page - 1);
		} else {
			setPage(page + 1);
		}
	}
	return (
		<SafeAreaView className="bg-[#000]">
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: "#eee" },
					headerShadowVisible: false,
					headerLeft: () => <Back />,
					headerTitle: "",
					headerRight: () => (
						<Text className="font-extrabold text-4xl">Popular Jobs</Text>
					),
				}}
			/>
			<View className="flex-grow mt-8 px-6">
				{isLoading ? (
					<ActivityIndicator />
				) : (
					<FlatList
						data={data?.data?.data}
						keyExtractor={(item) => item.job_id.toString()}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{ rowGap: 16, paddingBottom: 16 }}
						renderItem={({ item }) => (
							<JobPopularCard {...item} className="w-full" />
						)}
						ListFooterComponent={<Pagination handlePage={handlePage} />}
					/>
				)}
			</View>
		</SafeAreaView>
	);
};
export default AllPopularJobs;

const style = StyleSheet.create({
	wrapper: {
		borderBlockColor: "red",
		backgroundColor: "yellow",
	},
});
