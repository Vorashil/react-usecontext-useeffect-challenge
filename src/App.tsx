import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from "./pages/home/HomePage";
import MyPage from "./pages/my-page/MyPage";
import LoginPage from "./pages/login/LoginPage";
import NavBar from "./common/NavBar";
import TestsPage from "./pages/tests/TestsPage";
import {useUserContext} from "./context/UserContext";

export default function App({RouterComponent}: { RouterComponent: any }) {

    const {user} = useUserContext();


    return (
        <div className={"bg-blue-50 h-screen overflow-scroll font-mono"}>
            <RouterComponent>
                <NavBar isLogged={user !== null}/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/mypage" element={<MyPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/tests" element={<TestsPage/>}/>
                </Routes>
            </RouterComponent>
        </div>
    )
        ;
}

