//estrutura de navegação do app
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PlusCircle, SoccerBall } from 'phosphor-react-native';
import { useTheme } from "native-base";

const { Navigator, Screen } = createBottomTabNavigator();

import { New } from '../screens/New';
import { Pools } from '../screens/Pools';
import { Platform } from "react-native";
import { Find } from "../screens/Find";

export function AppRoutes() {
    const { colors, sizes } = useTheme();

    const size = sizes[7]

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelPosition: 'beside-icon',
                tabBarActiveTintColor: colors.yellow[500],
                tabBarInactiveTintColor: colors.gray[300],
                tabBarStyle: {
                    marginBottom: -872.5,
                    height: sizes[22],
                    borderTopWidth: 0,
                    backgroundColor: colors.gray[800]
                },
                tabBarItemStyle: {
                    position: 'relative',
                    top: Platform.OS === 'android' ? -12 : 0
                }

            }}
        >
            <Screen
                name='new'
                component={New}
                options={{
                    tabBarIcon: ({ color }) => <PlusCircle color={color} size={size} />,
                    tabBarLabel: 'Novo Bolão'
                }}
            />

            <Screen
                name='pools'
                component={Pools}
                options={{
                    tabBarIcon: ({ color }) => <SoccerBall color={color} size={size} />,
                    tabBarLabel: 'Meus Bolões'
                }}
            />


            <Screen
                name='find'
                component={Find}
                options={{ tabBarButton: () => null }}
            />

        </Navigator>
    )
}
