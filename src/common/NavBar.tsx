import React from "react";
import Greeting from "../Greeting";
import NavBarItem from "./NavBarItem";
import {FaHome} from "react-icons/fa";
import {FaPerson} from "react-icons/fa6";
import {BiExit, BiLogIn} from "react-icons/bi";

const NavBarContainer = ({children}: { children: React.ReactNode }) => {
    const NavbarGreeting = () => {
        return (
            <div>
                <Greeting name={"oyren.dev"}/>
            </div>
        )
    }

    const NavBarItems = () => {
        return (
            <div>
                <ul className={"flex flex-row"}>
                    {children}
                </ul>
            </div>
        )
    }

    return (
        <div data-testid="navigation-items"
             className={"m-1 border-blue-400 border-2 rounded-b-2xl bg-blue-50 flex justify-between shadow-md mb-5 content-center"}>
            <NavbarGreeting/>
            <NavBarItems/>
        </div>
    )

}

export default function NavBar({isLogged}: { isLogged: boolean }) {

    const LoggedInView = () => {
        return (
            <>
                <NavBarItem name={"Mənim Səhifəm"} href={"/mypage"} icon={<FaPerson/>}/>
                <NavBarItem name={"Çıxış"} href={"/login"} icon={<BiExit/>}/>
            </>
        )
    }

    const LoggedOutView = () => {
        return (
            <NavBarItem name={"Daxil ol"} href={"/login"} icon={<BiLogIn/>}/>
        )
    }

    const ConditionalNavbarItems = () => {
        return isLogged ? <LoggedInView/> : <LoggedOutView/>
    }

    return (
        <NavBarContainer>
            <NavBarItem name={"Əsas Səhifə"} href={"/"} icon={<FaHome/>}/>
            <ConditionalNavbarItems/>
        </NavBarContainer>
    )
}

