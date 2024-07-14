import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Pagination = ({ handlePage }: { handlePage: (type: string) => void }) => {
	return (
		<View
			className="flex-row w-full items-end gap-4"
			style={{ justifyContent: "center" }}
		>
			<TouchableOpacity
				onPress={() => handlePage("prev")}
				style={styles.button}
				className="w-1/2 items-center p-2"
			>
				<View>
					<Text className="text-xl">Prev</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handlePage("next")}
				style={styles.button}
				className="w-1/2 items-center p-2"
			>
				<View>
					<Text className="text-xl">Next</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};
export default Pagination;

const styles = StyleSheet.create({
	button: {
		backgroundColor: "transparent",
		borderWidth: 2,
		borderColor: "#000",
		borderRadius: 8,
	},
});
