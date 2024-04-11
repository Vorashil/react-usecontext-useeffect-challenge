import InputField from "../../../common/InputField";
import LoginPageButtons from "./LoginPageButtons";
import {createRef} from "react";

type ForgotPasswordViewProps = {
    setHasForgotPassword: (hasForgotPassword: boolean) => void
    email: string,
    setEmail: (email: string) => void
}
const ForgotPasswordView = ({setHasForgotPassword, email, setEmail}: ForgotPasswordViewProps) => {
    const handleForgotPassword = () => {
        console.log("Forgot Password for the email " + email)
    }

    const emailInputRef = createRef()


    return (
        <div>
            <div className={"my-2 flex-col text-center"}>
                <h1>Email</h1>

                {/*<InputField*/}
                {/*    ref={emailInputRef}*/}
                {/*    type={"email"} placeholder={"Email"} onChange={setEmail} value={email}/>*/}
                <p className={"text-center mt-2 mb-5 text-sm"}>
                    We will send you a link to reset your password
                </p>
                <LoginPageButtons onClick={handleForgotPassword} text={"Request Password reset link"}/>
                <LoginPageButtons onClick={() => setHasForgotPassword(false)} text={"Back to Login"}/>

            </div>

        </div>
    )
}

export default ForgotPasswordView