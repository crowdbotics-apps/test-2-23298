import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings184068Navigator from '../features/Settings184068/navigator';
import UserProfile184061Navigator from '../features/UserProfile184061/navigator';
import Settings184060Navigator from '../features/Settings184060/navigator';
import Settings184058Navigator from '../features/Settings184058/navigator';
import SignIn2184056Navigator from '../features/SignIn2184056/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings184068: { screen: Settings184068Navigator },
UserProfile184061: { screen: UserProfile184061Navigator },
Settings184060: { screen: Settings184060Navigator },
Settings184058: { screen: Settings184058Navigator },
SignIn2184056: { screen: SignIn2184056Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
