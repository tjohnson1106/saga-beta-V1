import React, { Component } from "react";
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator
} from "react-navigation";
import { connect } from "react-redux";
import { FontAwesome, EvilIcons } from "@expo/vector-icons";
import { Image, Keyboard } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import ExploreScreen from "./screens/ExploreScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AuthenticationScreen from "./screens/AuthenticationScreen";
import NewDataScreen from "./screens/NewDataScreen";

import HeaderAvatar from "./components/HeaderAvatar";
import AddDataButtonHeader from "./components/AddDataButtonHeader";
import { colors } from "./utils/constants";
import navigation from "./reducers/navigation";
// import addIcon from "../assets/icons/";

const TAB_ICON_SIZE = 20;

const Tabs = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        headerTitle: "Saga",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="home" />
        )
      })
    },
    Explore: {
      screen: ExploreScreen,
      navigationOptions: () => ({
        headerTitle: "Explore",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="search" />
        )
      })
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: () => ({
        headerTitle: "Favorites",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome
            size={TAB_ICON_SIZE}
            color={tintColor}
            name="file-video-o"
          />
        )
      })
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        headerTitle: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="user" />
        )
      })
    }
  },
  {
    lazy: true,
    tabBarPosition: "bottom",
    swipeEnabled: false,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: colors.PRIMARY,
      inactiveTintColor: colors.LIGHT_GRAY,
      style: {
        backgroundColor: colors.BASE_GRAY,
        height: 50,
        paddingVertical: 5
      }
    }
  }
);

const NewDataModal = StackNavigator(
  {
    NewData: {
      screen: NewDataScreen,
      navigationOptions: ({ navigation }) => ({
        // headerLeft: <HeaderAvatar />,
        headerRight: (
          <AddDataButtonHeader
            side="right"
            onPress={() => {
              Keyboard.dismiss();
              navigation.goBack(null);
            }}
          >
            <EvilIcons colors={colors.PRIMARY} size={25} name="close" />
          </AddDataButtonHeader>
        )
      })
    }
  },
  {
    headerMode: "none"
  }
);

const AppMainNav = StackNavigator(
  {
    Home: {
      screen: Tabs,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <HeaderAvatar />,
        headerRight: (
          <AddDataButtonHeader
            side="right"
            onPress={() => navigation.navigate("NewData")}
          >
            <Image
              source={require("../assets/icons/add-icon.png")}
              size={20}
              name="plus"
            />
          </AddDataButtonHeader>
        )
      })
    },
    NewData: {
      screen: NewDataModal
    }
  },
  {
    cardStyle: {
      backgroundColor: "#F1F6FA"
    },
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: colors.BASE_GRAY
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 24,
        color: colors.BLUE
      }
    })
  }
);

class AppNavigator extends Component {
  render() {
    const nav = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav
    });
    if (!this.props.user.isAuthenticated) {
      return <AuthenticationScreen />;
    }
    return <AppMainNav navigation={nav} />;
  }
}

export default connect(state => ({
  nav: state.nav,
  user: state.user
}))(AppNavigator);

export const router = AppMainNav.router;
