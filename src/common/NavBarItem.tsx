import React, {ReactNode} from "react";
import {Link} from "react-router-dom";

const NavBarItem = ({name, href, icon}: { name: string, href: string, icon?: ReactNode }) => {

    //todo: when page is minimised I want the logo and the text to be on top of each other and centered
    return (
        <li className={"p-2 mx-2 border-blue-400 border-2 rounded-b-2xl my-3 shadow-md text-center hover:shadow-none hover:bg-blue-400/10 "}>
            <Link to={href}>
                <div className={"flex items-center flex-wrap"}>
                    {icon && <div className={"m-1 mr-3"}>{icon}</div>}
                    <div>{name}</div>
                </div>
            </Link>
        </li>
    )
}

export default NavBarItem;

