import { BsStarFill } from "react-icons/bs";
import { RectangleButton } from "../../../../components/buttonRectangle";
import { AiOutlineSearch } from "react-icons/ai";
import './component.css'
import { UserRegistrationModel } from "./Model";
import { useState } from "react";

function SurvayTemplate(props) {
    return (
        <tr className='member_userRegistration_usersList_template'>
            <td className='first'>1</td>
            <td className='second'>userName</td>
            <td className='third'>
            <RectangleButton primary width='80px' height='30px' onClick={props.onViewPress}>View</RectangleButton>
            </td>
            {/* <td className='fourth'>
                <RectangleButton width='50px' height='30px'><TiTick/></RectangleButton>
                <div className="middle"></div>
                <RectangleButton danger width='50px' height='30px'><TiTimes /></RectangleButton>
            </td> */}
        </tr>
    )
}


export function SurvayList() {
    const [showUserRegistrationModel,setshowUserRegistrationModel] = useState(false);

    function showUserRegistrationModelfn(){
        setshowUserRegistrationModel(true)
    }

    function closeshowUserRegistrationModelfn(){
        setshowUserRegistrationModel(false);
    }

    return (
        <div className='member_userRegistration_usersList_outerDiv'>
            <table className='member_userRegistration_usersList_table'>
                <tr>
                    <th className='h_first'>No</th>
                    <th className='h_second'>Member Name</th>
                    <th className='h_third'></th>
                    {/* <th className='h_fourth'></th> */}
                </tr>
                <SurvayTemplate onViewPress={showUserRegistrationModelfn}/>
                <SurvayTemplate onViewPress={showUserRegistrationModelfn}/>
                <SurvayTemplate onViewPress={showUserRegistrationModelfn}/>
                <SurvayTemplate onViewPress={showUserRegistrationModelfn}/>
                <SurvayTemplate onViewPress={showUserRegistrationModelfn}/>
                <SurvayTemplate onViewPress={showUserRegistrationModelfn}/>
                <SurvayTemplate onViewPress={showUserRegistrationModelfn}/>
                <SurvayTemplate onViewPress={showUserRegistrationModelfn}/>
                <SurvayTemplate onViewPress={showUserRegistrationModelfn}/>
                <SurvayTemplate onViewPress={showUserRegistrationModelfn}/>
                <SurvayTemplate onViewPress={showUserRegistrationModelfn}/>
                <SurvayTemplate onViewPress={showUserRegistrationModelfn}/>
                <SurvayTemplate onViewPress={showUserRegistrationModelfn}/>
                <SurvayTemplate onViewPress={showUserRegistrationModelfn}/>
                <SurvayTemplate onViewPress={showUserRegistrationModelfn}/>
                <SurvayTemplate onViewPress={showUserRegistrationModelfn}/>
                <SurvayTemplate onViewPress={showUserRegistrationModelfn}/>
            </table>
            <UserRegistrationModel show={showUserRegistrationModel} onClose={closeshowUserRegistrationModelfn}/>
        </div>

    );
}