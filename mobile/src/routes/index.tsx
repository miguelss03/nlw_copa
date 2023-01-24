//Index - raiz principal da navegação

import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native';
import { AppRoutes } from './app.routes';
import { SingIn } from '../screens/SignIn'

export function Routes() {
    return (
        <View>
            <NavigationContainer>
                <SingIn />
            </NavigationContainer>
        </View>
    )
}