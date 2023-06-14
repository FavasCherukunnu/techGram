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
import { UserHomePage as HomeUser } from "../pages/user/pages/homePage/HomePage";
import { UserWardInfoPageHome } from "../pages/user/pages/wardInfoPage/pages/wardInfoPage/WardInfoPageHome";
import { UserDiscussionPage } from "../pages/user/pages/wardInfoPage/pages/discussionPage/UserDiscussionPage";
import { UserProjectPage } from "../pages/user/pages/wardInfoPage/pages/projectPage/UserProjectPage";
import { UserAnnoucementPage } from "../pages/user/pages/wardInfoPage/pages/annoucementPage/UserAnnoucementPage";
import { UserComplaintPage } from "../pages/user/pages/wardInfoPage/pages/complaintPage/UserComplaintPage";
import { UserGramSabhaPage } from "../pages/user/pages/wardInfoPage/pages/gramSabhaPage/UserGramSabhaPage";
import { UserInstitutePage } from "../pages/user/pages/wardInfoPage/pages/institutesPage/UserInstitutePage";
import { UserUsersPage } from "../pages/user/pages/wardInfoPage/pages/usersPage/UserPage";
import { UserWardInfoPageRoot } from "../pages/user/pages/wardInfoPage/pages/home/UserWardInfoPageRoot";
import { UserPanchayathInfoPageRoot } from "../pages/user/pages/panchayathInfoPage/pages/home/UserPanchayathInfoPageRoot";
import { UserPanchayathInfoPageHome } from "../pages/user/pages/panchayathInfoPage/pages/PanchayathInfoPage/PanchayathInfoPage";
import { UserPanchayathDiscussionPage } from "../pages/user/pages/panchayathInfoPage/pages/PanchayathDiscussionPage/UserPanchayathDiscussionPage";
import { UserPanchayathProjectPage } from "../pages/user/pages/panchayathInfoPage/pages/PanchayathProjectPage/UserPanchayathProjectPage";
import { UserPanchayathAnnoucementPage } from "../pages/user/pages/panchayathInfoPage/pages/PanchayathAnnoucementPage/UserPanchayathAnnoucementPage";
import { UserPanchayathComplaintPage } from "../pages/user/pages/panchayathInfoPage/pages/PanchayathComplaintPage/UserPanchayathComplaintPage";
import { UserPanchayathSurvayPage } from "../pages/user/pages/panchayathInfoPage/pages/PanchayathSurvayPage/UserPanchayathSurvayPage";
import { UserPanchayathInstitutePage } from "../pages/user/pages/panchayathInfoPage/pages/PanchayathInstitutesPage/UserPanchayathInstitutePage";
import { EditUserPage } from "../pages/user/pages/editUserPage/EditUserPage";
import { Editpage2 } from "../pages/user/pages/editUserPage/editPage2";



export function RouterHandler() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path="signUp" element={<SignupPage />} />
                    <Route path="login" element={<LoginPage />} />
                    {/* <Route path="template" element={<HomeTemplate />} /> */}
                    <Route path="editUser" element={<EditUserPage/>}/>
                    <Route path="editProfile" element={<Editpage2/>}/>
                    <Route path="home" element={<UserHomePage />}>
                        <Route path="" element={<HomeUser />} />
                        <Route path="wardInfo" element={<WardInfoPage />}>
                            <Route path="" element={<UserWardInfoPageRoot />} />
                            <Route path="Ward Info" element={<UserWardInfoPageHome />} />
                            <Route path="Discussion" element={<UserDiscussionPage />} />
                            <Route path="Project" element={<UserProjectPage />} />
                            <Route path="Announcement" element={<UserAnnoucementPage />} />
                            <Route path="Complaint" element={<UserComplaintPage />} />
                            <Route path="Gram Sabha" element={<UserGramSabhaPage />} />
                            <Route path="Institutes" element={<UserInstitutePage />} />
                            <Route path="Users" element={<UserUsersPage />} />
                        </Route>
                        <Route path="panchayathInfo" element={<PanchayathInfoPage />} >
                            <Route path="" element={<UserPanchayathInfoPageRoot />} />
                            <Route path="Panchayath Info" element={<UserPanchayathInfoPageHome />} />
                            <Route path="Discussion" element={<UserPanchayathDiscussionPage />} />
                            <Route path="Project" element={<UserPanchayathProjectPage />} />
                            <Route path="Announcement" element={<UserPanchayathAnnoucementPage />} />
                            <Route path="Complaint" element={<UserPanchayathComplaintPage />} />
                            <Route path="Survay" element={<UserPanchayathSurvayPage />} />
                            <Route path="Institutes" element={<UserPanchayathInstitutePage />} />
                        </Route>
                        <Route path="locate" element={<LocatePage />} />
                        <Route path="survay" element={<SurvayPage />} />
                    </Route>
                </Route>
                <Route path="*" element={ForNotFor()} />
            </Routes>
        </BrowserRouter>
    );

}