import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import Tab from "./Tab";
import Description from "./Description";
import Qualification from "./Qualification";
import Responsibilities from "./Responsibilities";

const tabData = [
	{
		id: 1,
		name: "Description",
	},
	{
		id: 2,
		name: "Qualification",
	},
	{
		id: 3,
		name: "Responsibilities",
	},
];
const Tabs = ({ data }: { data: any }) => {
	const [active, setActive] = useState(1);
	return (
		<View className="px-6">
			<FlatList
				data={tabData}
				renderItem={({ item }) => (
					<Tab {...item} isActive={item.id === active} setActive={setActive} />
				)}
				showsHorizontalScrollIndicator={false}
				horizontal
				contentContainerStyle={{
					columnGap: 16,
					flexGrow: 1,
					justifyContent: "space-between",
				}}
			/>
			<View className="mt-8 min-h-56">
				{active === 1 && <Description data={data.job_description} />}
				{active === 2 && (
					<Qualification data={data.job_highlights?.Qualifications} />
				)}
				{active === 3 && (
					<Responsibilities data={data.job_highlights?.Responsibilities} />
				)}
			</View>
		</View>
	);
};
export default Tabs;
