import { View, Text } from 'react-native'
const Responsibilities = ({data}: { data: any[]}) => {
  return (
    <View className="rounded-lg p-4 bg-white">
			<Text className="text-semibold text-2xl">Responsibilities</Text>
			{data?.map((item, i) => (
				<Text className="my-2" key={item + i}>
					<Text className="text-xs mr-4">{"\u2B24"}</Text>
					<Text>{item}</Text>
				</Text>
			))}
		</View>
  )
}
export default Responsibilities