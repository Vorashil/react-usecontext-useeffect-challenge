import { useState } from "react"
import InputField from "../../../common/InputField";
import LoginPageButtons from "./LoginPageButtons";


export default function LoggedOutView({handleLogin, setHasForgotPassword}: any) {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    return (
        <form onSubmit={e => {
            e.preventDefault();
            handleLogin(username, password);
        }}>
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
                <LoginPageButtons onClick={() => handleLogin(username, password)} text={"Login"}/>
                <LoginPageButtons onClick={() => setHasForgotPassword(true)} text={"Forgot my Password"}/>
            </div>
        </form>
    )
}