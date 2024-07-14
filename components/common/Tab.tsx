import { cn } from "@/utils";
import { Text, TouchableOpacity } from "react-native";

interface Props {
	isActive: boolean;
	name: string;
	id: number;
	setActive: React.Dispatch<React.SetStateAction<number>>;
}
const Tab = ({ isActive, name, setActive, id }: Props) => {

	function handleSelect() {
		setActive(id);
	}
	return (
		<TouchableOpacity
			className={cn("bg-white p-2 px-6 rounded-lg", isActive && "bg-black")}
			onPress={handleSelect}
		>
			<Text
				className={cn(
					"font-medium text-gray-500",
					isActive && "text-white font-normal"
				)}
			>
				{name}
			</Text>
		</TouchableOpacity>
	);
};
export default Tab;
