import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage/homePage";
import SignupPage from "../pages/signup/signup";
import { ForNotFor } from "../pages/ForNotFor/ForNotFor";
import LoginPage from "../pages/loginPage/LoginPage";
import UserHomePage from "../pages/user/userHomePage";
import UserWardInfoPage from "../pages/user/pages/wardInfoPage/wardInfoPage";
import UserPanchayathInfoPage from "../pages/user/pages/panchayathInfoPage/panchayathInfoPage";
import { UserLocatePage } from "../pages/user/pages/LocatePage/locatePage";
import { UserSurvayPage } from "../pages/user/pages/survayPage/survayPage";
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
import { MemberHomePage } from "../pages/member/memberHomePage";
import { HomeMember } from "../pages/member/pages/homePage/HomePage";
import { MemberWardInfoPage } from "../pages/member/pages/wardInfoPage/wardInfoPage";
import { MemberWardInfoPageRoot } from "../pages/member/pages/wardInfoPage/pages/home/UserWardInfoPageRoot";
import { MemberWardInfoPageHome } from "../pages/member/pages/wardInfoPage/pages/wardInfoPage/WardInfoPageHome";
import { MemberDiscussionPage } from "../pages/member/pages/wardInfoPage/pages/discussionPage/UserDiscussionPage";
import { MemberProjectPage } from "../pages/member/pages/wardInfoPage/pages/projectPage/MemberProjectPage";
import { MemberAnnoucementPage } from "../pages/member/pages/wardInfoPage/pages/annoucementPage/MemberAnnoucementPage";
import { MemberComplaintPage } from "../pages/member/pages/wardInfoPage/pages/complaintPage/UserComplaintPage";
import { MemberGramSabhaPage } from "../pages/member/pages/wardInfoPage/pages/gramSabhaPage/MemberGramSabhaPage";
import { MemberInstitutePage } from "../pages/member/pages/wardInfoPage/pages/institutesPage/UserInstitutePage";
import { MemberUsersPage } from "../pages/member/pages/wardInfoPage/pages/usersPage/UserPage";
import { MemberPanchayathInfo } from "../pages/member/pages/panchayathInfoPage/panchayathInfoPage";
import { MemberPanchayathInfoPageRoot } from "../pages/member/pages/panchayathInfoPage/pages/home/UserPanchayathInfoPageRoot";
import { MemberPanchayathInfoPageHome } from "../pages/member/pages/panchayathInfoPage/pages/PanchayathInfoPage/PanchayathInfoPage";
import { MemberPanchayathDiscussionPage } from "../pages/member/pages/panchayathInfoPage/pages/PanchayathDiscussionPage/UserPanchayathDiscussionPage";
import { MemberPanchayathProjectPage } from "../pages/member/pages/panchayathInfoPage/pages/PanchayathProjectPage/UserPanchayathProjectPage";
import { MemberPanchayathAnnoucementPage } from "../pages/member/pages/panchayathInfoPage/pages/PanchayathAnnoucementPage/UserPanchayathAnnoucementPage";
import { MemberPanchayathComplaintPage } from "../pages/member/pages/panchayathInfoPage/pages/PanchayathComplaintPage/UserPanchayathComplaintPage";
import { MemberPanchayathSurvayPage } from "../pages/member/pages/panchayathInfoPage/pages/PanchayathSurvayPage/UserPanchayathSurvayPage";
import { MemberPanchayathInstitutePage } from "../pages/member/pages/panchayathInfoPage/pages/PanchayathInstitutesPage/UserPanchayathInstitutePage";
import { MemberLocatePage } from "../pages/member/pages/LocatePage/locatePage";
import { MemberSurvayPage } from "../pages/member/pages/survayPage/survayPage";
import { MemberOnlyComplaintPage } from "../pages/member/pages/ComplaintPage/UserPanchayathComplaintPage";
import { MemberUserRegistration } from "../pages/member/pages/userRegistration/memberUserRegistration";



export function RouterHandler() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path="signUp" element={<SignupPage />} />
                    <Route path="login" element={<LoginPage />} />
                    {/* <Route path="template" element={<HomeTemplate />} /> */}
                    <Route path="editUser" element={<EditUserPage />} />
                    <Route path="editProfile" element={<Editpage2 />} />
                    <Route path="user">
                        <Route path="home" element={<UserHomePage />}>
                            <Route path="" element={<HomeUser />} />
                            <Route path="wardInfo" element={<UserWardInfoPage />}>
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
                            <Route path="panchayathInfo" element={<UserPanchayathInfoPage />} >
                                <Route path="" element={<UserPanchayathInfoPageRoot />} />
                                <Route path="Panchayath Info" element={<UserPanchayathInfoPageHome />} />
                                <Route path="Discussion" element={<UserPanchayathDiscussionPage />} />
                                <Route path="Project" element={<UserPanchayathProjectPage />} />
                                <Route path="Announcement" element={<UserPanchayathAnnoucementPage />} />
                                <Route path="Complaint" element={<UserPanchayathComplaintPage />} />
                                <Route path="Survay" element={<UserPanchayathSurvayPage />} />
                                <Route path="Institutes" element={<UserPanchayathInstitutePage />} />
                            </Route>
                            <Route path="locate" element={<UserLocatePage />} />
                            <Route path="survay" element={<UserSurvayPage />} />
                        </Route>
                    </Route>
                    <Route path="member">
                        <Route path="home" element={<MemberHomePage />}>
                            <Route path="" element={<HomeMember/>} />
                            <Route path="wardInfo" element={<MemberWardInfoPage />}>
                                <Route path="" element={<MemberWardInfoPageRoot />} />
                                <Route path="Ward Info" element={<MemberWardInfoPageHome />} />
                                <Route path="Discussion" element={<MemberDiscussionPage />} />
                                <Route path="Project" element={<MemberProjectPage />} />
                                <Route path="Announcement" element={<MemberAnnoucementPage />} />
                                <Route path="Complaint" element={<MemberComplaintPage />} />
                                <Route path="Gram Sabha" element={<MemberGramSabhaPage />} />
                                <Route path="Institutes" element={<MemberInstitutePage />} />
                                <Route path="Users" element={<MemberUsersPage />} />
                            </Route>
                            <Route path="panchayathInfo" element={<MemberPanchayathInfo />} >
                                <Route path="" element={<MemberPanchayathInfoPageRoot />} />
                                <Route path="Panchayath Info" element={<MemberPanchayathInfoPageHome />} />
                                <Route path="Discussion" element={<MemberPanchayathDiscussionPage />} />
                                <Route path="Project" element={<MemberPanchayathProjectPage />} />
                                <Route path="Announcement" element={<MemberPanchayathAnnoucementPage />} />
                                <Route path="Complaint" element={<MemberPanchayathComplaintPage />} />
                                <Route path="Survay" element={<MemberPanchayathSurvayPage />} />
                                <Route path="Institutes" element={<MemberPanchayathInstitutePage />} />
                            </Route>
                            <Route path="locate" element={<MemberLocatePage />} />
                            <Route path="survay" element={<MemberSurvayPage />} />
                            <Route path="complaints" element={<MemberOnlyComplaintPage />} />
                            <Route path="User Registration" element={<MemberUserRegistration />} />
                        </Route>
                    </Route>
                </Route>
                <Route path="*" element={ForNotFor()} />
            </Routes>
        </BrowserRouter>
    );

}