import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type navigationType  = {
  Home: undefined;
  Login: undefined;
};


export type TabNavType = BottomTabNavigationProp<navigationType>;