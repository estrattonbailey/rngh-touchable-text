import {
  View,
  Text,
  SafeAreaView,
  Pressable as RNPressable,
} from 'react-native';

import {
  Pressable as RNGHPressable,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={{ padding: 16, gap: 8 }}>
          <Text>default Pressable</Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <RNPressable
              style={[
                buttonStyle,
                {
                  backgroundColor: 'lightgreen',
                  borderRadius: 16,
                },
              ]}>
              <Text>16</Text>
            </RNPressable>
            <RNPressable
              style={[
                buttonStyle,
                {
                  backgroundColor: 'lightgreen',
                  borderRadius: 32,
                },
              ]}>
              <Text>32</Text>
            </RNPressable>
            <RNPressable
              style={[
                buttonStyle,
                {
                  backgroundColor: 'lightgreen',
                  borderRadius: 999,
                },
              ]}>
              <Text>999</Text>
            </RNPressable>
          </View>
          <Text>RNGH Pressable</Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <RNGHPressable
              style={[
                buttonStyle,
                {
                  backgroundColor: 'lightgreen',
                  borderRadius: 16,
                },
              ]}>
              <Text>16</Text>
            </RNGHPressable>
            <RNGHPressable
              style={[
                buttonStyle,
                {
                  backgroundColor: 'lightcoral',
                  borderRadius: 32,
                },
              ]}>
              <Text>32</Text>
            </RNGHPressable>
            <RNGHPressable
              style={[
                buttonStyle,
                {
                  backgroundColor: 'lightcoral',
                  borderRadius: 999,
                },
              ]}>
              <Text>999</Text>
            </RNGHPressable>
          </View>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const buttonStyle = {
  width: 32,
  height: 32,
  alignItems: 'center',
  justifyContent: 'center',
};
