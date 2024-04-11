import {useUserContext} from "../../context/UserContext";
import {createRef, useState} from "react";
import InputField from "../../common/InputField";
import LoginPageButtons from "./components/LoginPageButtons";
import LoggedInView from "./components/LoggedInView";
import ForgotPasswordView from "./components/ForgotPasswordView";
import LoggedOutView from "./components/LoggedOutView";

export default function LoginPage() {

    const {user, login, logout} = useUserContext();
    const [hasForgotPassword, setHasForgotPassword] = useState(false);

    const [email, setEmail] = useState("")
    const handleLogin = async (userName: string, passWord: string) => {
        console.log('loggin in with username: ' + userName + ' and password: ' + passWord);

        const loginData = {
            username: userName,
            password: passWord,
            expiresInMins: 30 // optional, defaults to 60
        };

        await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) { // Ensure the API call was successful
                    console.log(data);
                    login({
                        userName: data.username,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        imageUrl: data.image
                    }); // Pass the user object to the login function
                } else {
                    throw new Error("Login failed with status: " + data.message);
                }
            })
            .catch(err => {
                console.error("Login error:", err);
            });
    };

    return (
        <div className={"flex flex-col items-center"}>
            {user != null
                ? <LoggedInView logout={logout}/>
                : hasForgotPassword
                    ?
                    <ForgotPasswordView email={email} setEmail={setEmail} setHasForgotPassword={setHasForgotPassword}/>
                    : <LoggedOutView handleLogin={handleLogin} setHasForgotPassword={setHasForgotPassword}/>  }
        </div>
    )
}