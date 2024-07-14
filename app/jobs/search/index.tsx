import Back from "@/components/common/Back";
import { Stack, useLocalSearchParams } from "expo-router";
import { FlatList, SafeAreaView, ScrollView, Text } from "react-native";
import SearchBar from "@/components/common/Search";
import { jobList } from "@/data";
import JobPopularCard from "@/components/common/JobPopularCard";
import { View } from "react-native";
import useQueryRecentJobs from "@/hooks/useQueryRecentJobs";

const Search = () => {
	const params = useLocalSearchParams();
	console.log(params);
	const { data } = useQueryRecentJobs(params?.query as string, "all");
	return (
		<SafeAreaView className="grow px-6">
			<Stack.Screen
				options={{
					headerStyle: {
						backgroundColor: "#fff",
					},
					headerShadowVisible: false,
					headerLeft: () => <Back />,
					headerTitle: params?.query as string,
					headerTitleAlign: "center",
				}}
			/>

			<View className="flex-1">
				<FlatList
					data={data?.data?.data}
					ListHeaderComponent={
						<View className="bg-[#EEE] pt-8">
							<SearchBar />
							<Text className="mt-8 text-xl font-medium">
								{data?.data?.data?.length ?? 0} Job Opportunities Found
							</Text>
						</View>
					}
					renderItem={({ item }) => (
						<JobPopularCard {...item} className="w-full" />
					)}
					contentContainerStyle={{ gap: 24 }}
					showsVerticalScrollIndicator={false}
					
				/>
			</View>
		</SafeAreaView>
	);
};
export default Search;
