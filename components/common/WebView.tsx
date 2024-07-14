import { View, Text } from "react-native";
import WebView, { WebViewNavigation } from "react-native-webview";

interface Props {
    url: string;
    onNavStateChange: (nav: WebViewNavigation) => void;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const WebViewComp = ({ url, setLoading, onNavStateChange }:Props) => {
	return (
		<View className="grow">
            <WebView source={{ uri: url }} style={{ flex: 1 }} onLoadStart={() => setLoading(true)} onLoadEnd={() => {
                console.log("loading end")
                setLoading(false)
            }}
            onNavigationStateChange={(nav) => onNavStateChange(nav)}
            />
		</View>
	);
};
export default WebViewComp;
