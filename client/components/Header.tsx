import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform,StyleSheet } from 'react-native';
import { router } from 'expo-router';


const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const MyComponent = () => (
    <Appbar.Header style={styles.background}>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="" subtitle={'Subtitle'} />
        {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
        {/* <Appbar.Action icon={MORE_ICON} onPress={() => {}} /> */}
    </Appbar.Header>
);

export default MyComponent;

const styles = StyleSheet.create({
    background: {
    //   flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FF8C00',
    },
    
  });