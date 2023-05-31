import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage/homePage";
import SignupPage from "../pages/signup/signup";
import { ForNotFor } from "../pages/ForNotFor/ForNotFor";
import HomeTemplate from "../components/homeTemplate";
import LoginPage from "../pages/loginPage/LoginPage";
import UserHomePage from "../pages/user/userHomePage";
import WardInfoPage from "../pages/user/pages/wardInfoPage/wardInfoPage";
import PanchayathInfoPage from "../pages/user/pages/panchayathInfoPage/panchayathInfoPage";
import LocatePage from "../pages/user/pages/LocatePage/locatePage";
import SurvayPage from "../pages/user/pages/survayPage/survayPage";
import {UserHomePage as HomeUser} from "../pages/user/pages/homePage/HomePage";



export function RouterHandler() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path="signUp" element={<SignupPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="template" element={<HomeTemplate />} />
                    <Route path="home" element={<UserHomePage />}>
                        <Route path="" element={<HomeUser />} />
                        <Route path="wardInfo" element={<WardInfoPage />} />
                        <Route path="panchayathInfo" element={<PanchayathInfoPage />} />
                        <Route path="locate" element={<LocatePage />} />
                        <Route path="survay" element={<SurvayPage />} />
                    </Route>
                </Route>
                <Route path="*" element={ForNotFor()} />
            </Routes>
        </BrowserRouter>
    );

}