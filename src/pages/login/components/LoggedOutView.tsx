import {useState} from "react";
import InputField from "../../../common/InputField";
import LoginPageButtons from "./LoginPageButtons";

export default function LoggedOutView({
                                          setHasForgotPassword,
                                          handleLogin
                                      }
                                          : {
                                          setHasForgotPassword: (value: boolean) => void,
                                          handleLogin: (username: string, password: string) => void
                                      }
) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
        }}>
            <div className={"my-2"}>
                Log in
            </div>

            <div className={"flex flex-col m-2"}>
                <InputField type={"text"} placeholder={"Username"}
                            onChangeHandler={setUsername} value={username}/>
                <InputField type={"password"} placeholder={"Password"}
                            onChangeHandler={setPassword} value={password}/>
            </div>

            <div className={"my-2 flex justify-center"}>
                <LoginPageButtons onClick={() => handleLogin(username, password)} text={"Login"}/>
                <LoginPageButtons onClick={() => setHasForgotPassword(true)} text={"Forgot my Password"}/>
            </div>
        </form>
    )
}