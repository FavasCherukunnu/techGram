import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../homePage/homePage";
import SignupPage from "../signup/signup";
import { ForNotFor } from "../ForNotFor/ForNotFor";


export function RouterHandler(){


    return (
        <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={HomePage()}/>
                <Route path="signUp" element={SignupPage()}/>
            </Route>
            <Route path="*" element={ForNotFor()}/>
        </Routes>
        </BrowserRouter>
    );

}