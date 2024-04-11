import React, {createContext, useState, useContext, ReactNode} from 'react';

type UserType = {
    userName: string,
    firstName: string,
    lastName: string,
    imageUrl: string
}

interface UserContextType {
    user: UserType | null;
    login: (user: UserType) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider = ({children}: UserProviderProps): JSX.Element => {
    const [user, setUser] = useState<UserType | null>(null);

    const login = (user: UserType) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('userContext is null');
    }
    return context;
};