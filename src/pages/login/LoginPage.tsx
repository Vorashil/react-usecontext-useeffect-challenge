import {useAuthContext} from "../../context/AuthContext";
import {createRef, useState} from "react";
import InputField from "../../common/InputField";
import LoginPageButtons from "./components/LoginPageButtons";
import LoggedInView from "./components/LoggedInView";
import ForgotPasswordView from "./components/ForgotPasswordView";

export default function LoginPage() {

    const {isLoggedIn, login, logout} = useAuthContext();
    const [hasForgotPassword, setHasForgotPassword] = useState(false);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")


    const LoggedOutView = () => {
        return (
            <form>
                <div className={"my-2"}>
                    Log in
                </div>

                <div className={"flex flex-col m-2"}>
                    <InputField key={"username-login"} type={"text"} placeholder={"Username"}
                                onChangeHandler={setUsername} value={username}/>
                    <InputField key={"password-login"} type={"password"} placeholder={"Password"}
                                onChangeHandler={setPassword} value={password}/>
                </div>

                <div className={"my-2 flex justify-center"}>
                    <LoginPageButtons onClick={login} text={"Login"}/>
                    <LoginPageButtons onClick={() => setHasForgotPassword(true)} text={"Forgot my Password"}/>
                </div>
            </form>
        )
    }

    return (
        <div className={"flex flex-col items-center"}>
            {isLoggedIn
                ? <LoggedInView logout={logout}/>
                : hasForgotPassword
                    ?
                    <ForgotPasswordView email={email} setEmail={setEmail} setHasForgotPassword={setHasForgotPassword}/>
                    : <LoggedOutView/>  }
        </div>
    )
}