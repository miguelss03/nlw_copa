import { NativeBaseProvider, Center, Text } from 'native-base';

export function SingIn() {
    return (
        <Center flex={1} bgColor="gray.900">
            <Text
                color="white"
                fontFamily="heading"
                fontSize={24}>
                SIGNIN
            </Text>
        </Center>
    )
}