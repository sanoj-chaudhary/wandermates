import { Stack } from "expo-router";
import { Provider as PaperProvider } from 'react-native-paper';
export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <PaperProvider >
          <Stack.Screen name="index"  />
          <Stack.Screen name="login" />
      </PaperProvider>
    </Stack>
  );
}
