import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from "./pages/home/HomePage";
import MyPage from "./pages/my-page/MyPage";
import LoginPage from "./pages/login/LoginPage";
import NavBar from "./common/NavBar";
import TestsPage from "./pages/tests/TestsPage";
import {useAuthContext} from "./context/AuthContext";

export default function App({RouterComponent}: { RouterComponent: any }) {

    const {isLoggedIn} = useAuthContext();


    return (
        <div className={"bg-blue-50 h-screen overflow-scroll font-mono"}>
            <RouterComponent>
                <NavBar isLogged={isLoggedIn}/>
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

