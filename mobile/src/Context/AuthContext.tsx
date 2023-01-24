import { createContext, ReactNode, useState, useEffect } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { api } from '../services/api';

WebBrowser.maybeCompleteAuthSession();

interface UserProps {
    name: string;
    avatarUrl: string;
}

export interface AuthContextDataProps {
    user: UserProps;
    isUserLoading: boolean;
    singIn: () => Promise<void>
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {

    const [isUserLoading, setIsUserLoading] = useState(false);
    const [user, setUser] = useState<UserProps>({} as UserProps);

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: '895314239370-v9ig676nkj5ds2a0io82c3dro990n49c.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
        scopes: ['profile', 'email']
    });

    async function singIn() {
        try {
            setIsUserLoading(true);
            await promptAsync();

        } catch (error) {
            console.log(error);
            throw error;
        } finally {
            setIsUserLoading(false);
        }
    }

    async function siginInWithGoogle(access_token: string) {

    }

    useEffect(() => {
        if (response?.type === 'success' && response.authentication?.accessToken) {
            siginInWithGoogle(response.authentication.accessToken);
        }
    }, [response]);

    return (
        <AuthContext.Provider
            value={{
                singIn,
                isUserLoading,
                user,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

