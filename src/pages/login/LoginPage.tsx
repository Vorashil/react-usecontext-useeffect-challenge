import {useAuthContext} from "../../context/AuthContext";
import {createRef, useEffect, useRef, useState} from "react";
import InputField from "../../common/InputField";
import LoginPageButtons from "./components/LoginPageButtons";
import LoggedInView from "./components/LoggedInView";
import ForgotPasswordView from "./components/ForgotPasswordView";
import LoggedOutView from "./components/LoggedOutView";

export default function LoginPage() {

    const {user, dispatch} = useAuthContext();
    const [hasForgotPassword, setHasForgotPassword] = useState(false);

    const [email, setEmail] = useState("")


    const handleLogin = async (username: string, password: string) => {
        console.log(`username: ${username}, password: ${password}`)

        const requestBody = {
            username,
            password,
            expiresInMins: 30
        }

        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(requestBody)
        })

        const userData = await response.json()

        console.log('userData:', userData)

        dispatch({
            type: 'LOGIN',
            newState: {

                userName: userData.username,
                firstName: userData.firstName,
                lastName: userData.lastName,
                imageUrl: userData.image,
                gender: userData.gender
            }
        })


    }
    const logout = () => {}

    return (
        <div className={"flex flex-col items-center"}>
            {user != null
                ? <LoggedInView logout={logout}/>
                : hasForgotPassword
                    ?
                    <ForgotPasswordView email={email} setEmail={setEmail} setHasForgotPassword={setHasForgotPassword}/>
                    : <LoggedOutView handleLogin={handleLogin} setHasForgotPassword={setHasForgotPassword}/>}
        </div>
    )
}