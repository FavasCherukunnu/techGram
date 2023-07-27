import { BsStarFill } from "react-icons/bs";
import { RectangleButton } from "../../../../components/buttonRectangle";
import { AiOutlineSearch } from "react-icons/ai";
import './component.css'
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../user/userHomePage";
import { useEffect } from "react";
import axios from "axios";
import { SERVER_ADDRESS } from "../../../../staticFiles/constants";
import { getUserToken } from "../../../../staticFiles/functions";
import { buildStart } from "../panchayathInfoPage/pages/PanchayathSurvayPage/Component";


export function SurvayTemplate(props) {
    const rating = Math.round(props.data.averageRating*100)/100;
    return (
        <tr className='user_survay_survayList_template'>
            <td className='first'>{props.index}</td>
            <td className='second'>{props.data.title}</td>
            <td className='third'><div className="intra"><div>{rating}</div>{buildStart(rating)}</div></td>
            <td className='fourth'><RectangleButton width='60px' height='30px'><AiOutlineSearch /></RectangleButton></td>
        </tr>
    )
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
                        const res = await axios.get(`${SERVER_ADDRESS}/user/getAllPanchayath`, { headers: { 'u-auth-token': getUserToken() }, params: { key: '' } });
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