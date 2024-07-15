import JobRecentCard from "@/components/common/JobRecentCard";
import ScreenHeaderBtn from "@/components/common/ScreenHeaderBtn";
import HomeHeader from "@/components/HomeHeader";
import { jobList } from "@/data";
import useQueryRecentJobs from "@/hooks/useQueryRecentJobs";
import { Stack } from "expo-router";
import { FlatList, View, SafeAreaView, StyleSheet } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import {  } from "react-native-safe-area-context";

export default function Home() {
	const { isLoading, data, error } = useQueryRecentJobs(
		`developer&page=1`,
		"3days"
	);
	console.log(process.env.RAPID_API_KEY);
	return (
		<SafeAreaView className="grow shrink-0">
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: "#eee" },
					headerShadowVisible: false,
					headerLeft: () => <ScreenHeaderBtn name="bars" />,
					headerRight: () => <ScreenHeaderBtn name="user" />,
					headerTitle: "",
				}}
			/>
			<View className="flex-1">
				<FlatList
					data={data?.data?.data}
					ListHeaderComponent={<HomeHeader />}
					renderItem={({item}) => <JobRecentCard {...item} />}
					contentContainerStyle={{ gap: 20, }}
					keyExtractor={(item) => item.job_id.toString()}
				/>
			</View>
		</SafeAreaView>
	);
}
