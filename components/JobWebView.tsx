import { Stack } from "expo-router";
import {
	ActivityIndicator,
	SafeAreaView,
	TouchableOpacity,
	View,
} from "react-native";
import Back from "./common/Back";
import { WebViewNavigation } from "react-native-webview";
import { useEffect, useState } from "react";
import WebViewComp from "./common/WebView";
import ApplicationConfirmModal from "./ApplicationConfirmModal";
import Icon from "react-native-vector-icons/Feather";

const JobWebView = ({
	link,
	setShowWebView,
}: {
	link: string;
	setShowWebView: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [loading, setLoading] = useState(false);

    function handleWebViewNavState(nav: WebViewNavigation) {
        console.log(nav)
		// setIsWebViewClosed(true);
	}
	return (
		<SafeAreaView className="grow relative pt-4">
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: "#eee" },
					headerShadowVisible: false,
					headerLeft: () => <Back />,
                    headerTitle: "Web",
                    headerShown: false
				}}
			/>
			<TouchableOpacity
				onPress={() => setShowWebView(false)}
				className="p-3 bg-white rounded-xl"
			>
				<Icon name="arrow-left" size={24} />
			</TouchableOpacity>
			
			{loading && (
				<View className="grow justify-center items-center absolute top-0 left-0 right-0 bottom-0">
					<ActivityIndicator />
				</View>
			)}
			<WebViewComp
				onNavStateChange={handleWebViewNavState}
				url={link}
				setLoading={setLoading}
			/>
		</SafeAreaView>
	);
};
export default JobWebView;
