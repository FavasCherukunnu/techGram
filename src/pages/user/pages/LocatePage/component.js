import { BsStarFill } from "react-icons/bs";
import { RectangleButton } from "../../../../components/buttonRectangle";
import { AiOutlineSearch } from "react-icons/ai";
import './component.css'
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../userHomePage";
import { SERVER_ADDRESS } from "../../../../staticFiles/constants";
import axios from "axios";
import { getUserToken } from "../../../../staticFiles/functions";
import { SurvayTemplate } from "../../../President/pages/LocatePage/component";

function buildStart() {

    let star = [];
    let x = 0
    for (x = 0; x < 5; x++) {
        star.push(<BsStarFill size={20} />)
    }

    return <div style={{display:'flex'}}>
            {star}
            </div>

}


export function SurvayList() {
    const [panchayath, setpanchayath] = useState([]);
    const userCont = useContext(UserContext);
    const user = userCont.user;
    useEffect(
        () => {
            const loadPanchayath = async () => {
                if (user.panchayathOId) {
                    try {
                        const res = await axios.get(`${SERVER_ADDRESS}/user/getAllPanchayathSorted`, { headers: { 'u-auth-token': getUserToken() }, params: { key: '' } });
                        setpanchayath(res.data.panchayaths);

                    } catch (err) {
                        console.log(err);
                    }
                }
            }
            loadPanchayath();
        }, [user.panchayathOId]
    )
    return (
        <div className='user_survay_survayList_outerDiv'>
            <table className='user_survay_survayList_table'>
                <tr>
                    <th className='h_first'>No</th>
                    <th className='h_second'>Panchayath Name</th>
                    <th className='h_third'>Rating</th>
                    <th className='h_fourth'></th>
                </tr>
                {
                    panchayath.map(
                        (panchayath, index) => {
                            return <SurvayTemplate data={panchayath} index={index + 1} />;
                        }
                    )
                }
            </table>
        </div>

    );
}