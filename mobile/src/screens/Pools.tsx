import { Icon, VStack } from "native-base";
import { Octicons } from '@expo/vector-icons'
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { useNavigation } from '@react-navigation/native';

export function Pools() {
    const {navigate} = useNavigation();

    return (
        <VStack flex={1} bgColor="gray.900" >
            <Header title="Meus bolões" />

            <VStack
                mt={6}
                mx={5}
                pb={4}
                mb={4}
                borderBottomWidth={1}
                borderBottomColor="gray.600"
            >
                <Button
                    title="BUSCAR POR BOLÃO"
                    leftIcon={<Icon as={Octicons} name="search" color="black" size="md" />}
                    onPress={() => navigate('find')}
                />
            </VStack>
        </VStack>
    )
}