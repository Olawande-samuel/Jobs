import { View, Text } from "react-native";

const Description = ({ data }: { data: string }) => {
	return (
		<View className="rounded-lg p-4 px-8 bg-white">
			<Text className="text-semibold text-2xl">Description</Text>
			<Text>
				{data}
			</Text>
		</View>
	);
};
export default Description;
