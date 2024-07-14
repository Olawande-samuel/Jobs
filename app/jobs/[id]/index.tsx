import ApplicationConfirmModal from "@/components/ApplicationConfirmModal";
import Back from "@/components/common/Back";
import JobOrganisationInfo from "@/components/common/JobOrganisationInfo";
import Tabs from "@/components/common/Tabs";
import JobWebView from "@/components/JobWebView";
import useDataQuery from "@/hooks/useDataQuery";
import Endpoints from "@/utils/endpoints";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
	ActivityIndicator,
	Image,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import Animated, {
	interpolate,
	useAnimatedRef,
	useAnimatedStyle,
	useScrollViewOffset,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/Feather";

const HEADER_HEIGHT = 250;

const Job = () => {
	const params = useLocalSearchParams();
	const API = new Endpoints();

	const [modalVisible, setModalVisible] = useState(false);
	const scrollRef = useAnimatedRef<Animated.ScrollView>();
	const scrollOffset = useScrollViewOffset(scrollRef);

	const [openLink, setOpenLink] = useState(false);
	const { data, isLoading } = useDataQuery({
		queryFn: () => API.getJob(params.id as string),
		queryKey: ["get job info", params.id],
		enabled: !!params.id,
	});

	const headerAnimatedStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateY: interpolate(
						scrollOffset.value,
						[-HEADER_HEIGHT, 0, HEADER_HEIGHT],
						[-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
					),
				},
				{
					scale: interpolate(
						scrollOffset.value,
						[-HEADER_HEIGHT, 0, HEADER_HEIGHT],
						[2, 1, 1]
					),
				},
			],
		};
	});

	return (
		<>
			{openLink ? (
				<>
					{/* <ApplicationConfirmModal
						modalVisible={modalVisible}
						setModalVisible={setModalVisible}
					/> */}
					<JobWebView
						link={data?.data?.data?.[0]?.job_apply_link}
						setShowWebView={setOpenLink}
					/>
				</>
			) : (
				<View className="relative">
					<Stack.Screen
						options={{
							headerStyle: { backgroundColor: "#eee" },
							headerShadowVisible: false,
							headerShown: false,
							headerTitle: "",
						}}
					/>
					<Animated.ScrollView
						className="mb-[100px]"
						scrollEventThrottle={16}
						ref={scrollRef}
					>
						<Animated.View style={headerAnimatedStyle}>
							<Image
								source={require("../../../assets/images/details.jpg")}
								className=" w-full h-[240px]"
								resizeMode="cover"
							/>
						</Animated.View>
						<View className="absolute top-4">
							<Back />
						</View>
						{isLoading ? (
							<ActivityIndicator />
						) : (
							<>
								<View className="bg-white p-6 border-t border-slate-200 rounded-b-3xl ">
									<Text className="text-4xl font-bold">
										{data?.data?.data?.[0].job_title}
									</Text>
									<View className="flex-row gap-4 items-center">
										<Text className="text-slate-500">$40-50k/year</Text>
										<View className="bg-gray-300 p-[6px] rounded-lg">
											<Text className="">
												{data?.data?.data?.[0].job_employment_type}
											</Text>
										</View>
									</View>
									<View className="mt-10 ">
										<JobOrganisationInfo
											employer_name={data?.data?.data?.[0].employer_name}
											job_city={data?.data?.data?.[0].job_city}
											job_offer_expiration_datetime_utc={
												data?.data?.data?.[0].job_offer_expiration_datetime_utc
											}
										/>
									</View>
								</View>
								<View className="bg-[#eee] pt-6">
									<Tabs data={data?.data?.data?.[0]} />
								</View>
							</>
						)}
					</Animated.ScrollView>
					{data?.data?.data?.[0]?.job_apply_link && (
						<View className="grow flex-row gap-8 absolute bottom-0 bg-[#eee] w-full p-4">
							<TouchableOpacity className="border-2 p-4 rounded-xl ">
								<View>
									<Icon name="heart" size={28} />
								</View>
							</TouchableOpacity>
							<TouchableOpacity
								className="grow border-2 p-4 rounded-xl"
								onPress={() => {
									setOpenLink(true);
									setModalVisible(true);
								}}
							>
								<View>
									<Text className="text-center text-3xl">Apply</Text>
								</View>
							</TouchableOpacity>
						</View>
					)}
					{/* </SafeAreaView> */}
				</View>
			)}
		</>
	);
};
export default Job;
