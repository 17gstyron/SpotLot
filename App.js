import React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import LoginPage from './client/LoginPage';
import SignUpProfile from './client/SignUpProfile';
import SignUpCar from './client/SignUpCar';
import Profile from './client/Profile';
import MyLot from './client/MyLot';
import CreateLot from './client/CreateLot';
import MapContainer from './client/MapContainer';
import { FontAwesome5 } from '@expo/vector-icons';

const LoginStack = createStackNavigator();
const LoginStackScreen = () => (
  <LoginStack.Navigator
    screenOptions={{
      headerShown: false
    }}
    initialRouteName="Login"
  >
    <LoginStack.Screen name="Login" component={LoginPage} />
    <LoginStack.Screen name="SignUpProfile" component={SignUpProfile} />
    <LoginStack.Screen name="SignUpCar" component={SignUpCar} />
  </LoginStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={{
      headerShown: false
    }}
    initialRouteName="Profile"
  >
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const MapContainerStack = createStackNavigator();
const MapContainerStackScreen = () => (
  <MapContainerStack.Navigator
    screenOptions={{
      headerShown: false
    }}
    initialRouteName="MapContainer"
  >
    <MapContainerStack.Screen name="MapContainer" component={MapContainer} />
  </MapContainerStack.Navigator>
);

const MyLotStack = createStackNavigator();
const MyLotStackScreen = () => (
  <MyLotStack.Navigator
    screenOptions={{
      headerShown: false
    }}
    initialRouteName="MyLot"
  >
    <MyLotStack.Screen name="MyLot" component={MyLot} />
    <MyLotStack.Screen name="CreateLot" component={CreateLot} />
  </MyLotStack.Navigator>
);

function CustomDrawer(props){
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={() => (
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Image
              style={{ height: 65, width: 65, resizeMode: "contain" }}
              source={{
                uri: "https://pngimg.com/uploads/face/face_PNG5645.png"
              }}
            />
            <Text
              style={{ color: "#E5EBEA", alignSelf: "flex-end", fontSize: 16 }}
            >
              Fresh Prince
            </Text>
          </View>
        )}
        style={{ backgroundColor: "#3fb984" }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Logout"
        drawerContentOptions={{
          activeTintColor: "#3fb984"
        }}
        drawerContent={props => <CustomDrawer {...props} />}
      >
        <Drawer.Screen
          name="Map"
          component={MapContainerStackScreen}
          options={{
            drawerIcon: ({ tintColor }) => (
              <FontAwesome5
                name="globe"
                color={tintColor}
                size={20}
                right={-10}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            drawerIcon: ({ tintColor }) => (
              <FontAwesome5
                name="user"
                color={tintColor}
                size={20}
                right={-10}
              />
            )
          }}
        />
        <Drawer.Screen
          name="MyLot"
          component={MyLotStackScreen}
          // options={{ drawerIcon: ({ tintColor }) => (<FontAwesome5 name="user" color={tintColor} size={20} right={-10} />) }}
          // need to find an icon for MyLot
        />
        <Drawer.Screen
          name="MyLot"
          component={MyLotStackScreen}
          // options={{ drawerIcon: ({ tintColor }) => (<FontAwesome5 name="user" color={tintColor} size={20} right={-10} />) }}
          // need to find an icon for MyLot
        />
        <Drawer.Screen
          name="Logout"
          component={LoginStackScreen}
          options={{
            gestureEnabled: false,
            drawerIcon: ({ tintColor }) => (
              <FontAwesome5
                name="sign-out-alt"
                color={tintColor}
                size={20}
                right={-10}
              />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
