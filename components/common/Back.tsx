import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useRouter } from "expo-router";

const Back = () => {
	const router = useRouter();
	return (
		<TouchableOpacity
			onPress={() => router.back()}
			className="p-3 bg-white rounded-xl"
		>
			<Icon name="arrow-left" size={24} />
		</TouchableOpacity>
	);
};
export default Back;
