import LoginPageButtons from "./LoginPageButtons";

type LoggedInViewProps = {
    logout: () => void
}
export default function LoggedInView({logout}: LoggedInViewProps) {
    return (
        <>
            <div className={"my-2"}>
                Log out
            </div>

            <div className={"my-2"}>
                <LoginPageButtons onClick={logout} text={"Logout"}/>
            </div>
        </>
    )
}
