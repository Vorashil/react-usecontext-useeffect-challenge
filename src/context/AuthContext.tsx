import React, {createContext, useState, useContext, ReactNode, useReducer, Dispatch} from 'react';

export type UserType = {
    userName: string,
    firstName: string,
    lastName: string,
    imageUrl: string,
    gender: string,
}

interface AuthContextType {
    user: UserType | null;
    dispatch: Dispatch<{ type: string, newState: UserType }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps): JSX.Element => {

    const reducer = (
        state: UserType | null,
        action: {
            type: string;
            newState: UserType
        }) => {
        switch (action.type) {
            case 'LOGIN':
                return action.newState;
            case 'LOGOUT':
                return null;
            default:
                return state;
        }
    }

    const [user, dispatch] = useReducer(reducer, null);

    return (
        <AuthContext.Provider value={{user, dispatch}}>
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