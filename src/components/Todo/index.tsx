import { View, TouchableOpacity, Text, Image } from "react-native";

type Props = {
  name: String,
  completed?: Boolean,
  onCheck?: () => void,
  onUncheck?: () => void,
  onRemove?: () => void,
};

export default function Todo({ name, onCheck, onRemove, completed, onUncheck }: Props) {
  return (
    <>
      {completed ? (
        <View className="flex-row bg-[#262626] h-12 mb-1 mx-4 rounded-lg overflow-hidden no-underline">
          <TouchableOpacity
          onPress={onUncheck}
            className="absolute left-1 top-3"
          >
            <Image
              className="absolute left-1 top-1 w-4 h-4 bg-blue-400 rounded-full"
              resizeMode="contain"
              source={require("../../../assets/concluida.png")}
            />
            <Image
              className="w-6 h-6 "
              resizeMode="contain"
              source={require("../../../assets/check.png")}
            />
          </TouchableOpacity>
          <Text className="text-white text-xs line-through my-auto ml-8 mr-4">{name}</Text>
          <TouchableOpacity
            onPress={onRemove}
            className="absolute right-1 top-2 my-auto ml-2 "
          >
            <Image
              className="w-8 h-8"
              resizeMode="contain"
              source={require("../../../assets/trash.png")}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View className="flex-row bg-[#262626] h-12 mb-1 mx-4 rounded-lg overflow-hidden no-underline">
          <TouchableOpacity
            onPress={onCheck}
            className="absolute left-1 top-3"
          >
            <Image
              className="w-6 h-6"
              resizeMode="contain"
              source={require("../../../assets/check.png")}
            />
          </TouchableOpacity>
          <Text className="text-white text-xs	 my-auto ml-8 mr-4">{name}</Text>
          <TouchableOpacity
            onPress={onRemove}
            className="absolute right-1 top-2 my-auto ml-2 "
          >
            <Image
              className="w-8 h-8"
              resizeMode="contain"
              source={require("../../../assets/trash.png")}
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
