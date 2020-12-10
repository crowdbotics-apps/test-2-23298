import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1184133Navigator from '../features/BlankScreen1184133/navigator';
import BlankScreen0184132Navigator from '../features/BlankScreen0184132/navigator';
import Settings184068Navigator from '../features/Settings184068/navigator';
import Settings184058Navigator from '../features/Settings184058/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen1184133: { screen: BlankScreen1184133Navigator },
BlankScreen0184132: { screen: BlankScreen0184132Navigator },
Settings184068: { screen: Settings184068Navigator },
Settings184058: { screen: Settings184058Navigator },

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
