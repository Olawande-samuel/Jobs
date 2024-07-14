import { View, Text } from "react-native";
const Qualification = ({ data }: { data: any[] }) => {
	return (
		<View className="rounded-lg p-4 bg-white">
			<Text className="text-semibold text-2xl">Qualifications</Text>
			{data?.map((item, i) => (
				<Text className="my-2" key={item + i}>
					<Text className="mr-4">{"\u2B24"} </Text>
					<Text className="ml-4">{item}</Text>
				</Text>
			))}
		</View>
	);
	1;
};
export default Qualification;
