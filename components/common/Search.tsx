import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const Search = () => {
	const [searchValue, setSearchValue] = useState("");
	const router = useRouter();
	function handleSearch() {
		router.push(`/jobs/search?query=${searchValue}`);
	}
	return (
		<View className="flex-row gap-4 items-center">
			<TextInput
				className="grow rounded-lg p-3 bg-white"
				placeholder="Search For Jobs"
				value={searchValue}
				onChangeText={(e) => setSearchValue(e)}
			/>
			<TouchableOpacity
				className="bg-black p-2 rounded-lg"
				onPress={handleSearch}
			>
				<Icon name="search1" size={32} color="#FFF" />
			</TouchableOpacity>
		</View>
	);
};
export default Search;
