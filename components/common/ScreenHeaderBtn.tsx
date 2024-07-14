import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface Props {
	name: string;
}

const ScreenHeaderBtn = ({ name }: Props) => {
	return (
		<TouchableOpacity>
			<Icon name={name} size={24} />
		</TouchableOpacity>
	);
};
export default ScreenHeaderBtn;
