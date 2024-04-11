import {useUserContext} from "./context/UserContext";
import {useRef} from "react";

type GreetingProps = {
    name: string | undefined;

}

export default function Greeting({ name }:GreetingProps) {

    const {user} = useUserContext();

    return (
        <h1 className={"p-2 m-3 text-blue-950 font-mono"}>Salam, {user ? user.firstName : 'dost'}!</h1>
    );
}