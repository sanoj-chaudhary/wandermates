import { Stack } from "expo-router";
import { Provider as PaperProvider } from 'react-native-paper';
// import Navigation from "@/components/Navigaiton";
import {SafeAreaView,StyleSheet,View} from 'react-native'

export default function RootLayout() {
  return (
    <>
    <Stack screenOptions={{headerShown: false}}>
      <PaperProvider >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          
          <Stack.Screen name="index"  />
          <Stack.Screen name="login" />
          <Stack.Screen name="register" />
          </View>
          </SafeAreaView>
        
      </PaperProvider>
      
    </Stack>
    {/* <Navigation /> */}
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    marginTop:20,
    flex: 1,
    backgroundColor: '#FF8C00', // Orange background
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});