import React, { createContext, useState, useContext, ReactNode } from 'react';

export type UserType = {
    userName: string,
    firstName: string,
    lastName: string,
    imageUrl: string,
    gender: string,
}

interface AuthContextType {
    user: UserType | null;
    login: (user: UserType) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
    const [user, setUser] = useState<UserType | null>(null);

    const login = (user: UserType) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};