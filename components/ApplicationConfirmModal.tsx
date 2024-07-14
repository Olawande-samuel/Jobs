import { View, Text, Modal, Alert, TouchableOpacity } from "react-native";

interface Props {
	modalVisible: boolean;
	setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
	jobId?: string;
}

const ApplicationConfirmModal = ({
	modalVisible,
	setModalVisible,
	jobId,
}: Props) => {
	return (
		<View className="grow justify-center items-center">
			<Modal visible={modalVisible} transparent animationType="slide">
				<View className="grow justify-center items-center">
					<View className="p-10 rounded-[20px] items-center justify-center bg-white border-2 border-cyan-600">
						<Text className="mb-4 text-2xl">
							Did you apply for the position?
						</Text>
						<View className="flex-row gap-4">
							<TouchableOpacity
								onPress={() => setModalVisible(false)}
								className="border py-3 px-4 rounded-lg w-16 items-center justify-center"
							>
								<Text>No</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => setModalVisible(false)}
								className="border py-3 px-4 rounded-lg w-16 items-center justify-center"
							>
								<Text>Yes</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
};
export default ApplicationConfirmModal;
