import { useEffect, useState } from 'react';
import './imageLoading.css'
import axios from 'axios';
import { SERVER_ADDRESS } from '../staticFiles/constants';
import { SimpleLoadingScreen } from './LoadingScreen';
import { getUserToken } from '../staticFiles/functions';

export function AvatarImage(props) {

    const [image, setImage] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const loadImage = async () => {
        const imageElement = document.getElementById(props.dId ? props.dId : 'id123');
        imageElement.style.backgroundImage = ''
        setIsLoaded(false);
        try {
            // console.log((await axios.get(`${SERVER_ADDRESS}/user/getProfileImageById/${props.id}`,{headers:{'u-auth-token':getUserToken()}})).data.image.image.data.data)
            let blob = new Blob([new Uint8Array((await axios.get(`${SERVER_ADDRESS}/user/getProfileImageById/${props.id}`, { headers: { 'u-auth-token': getUserToken() } })).data.image.image.data.data)]);
            const imageUrl = URL.createObjectURL(blob);
            imageElement.style.backgroundImage = `url(${imageUrl})`
            imageElement.onload = ()=>URL.revokeObjectURL(imageUrl)
            // setImage(res.data.image.image)
        } catch (err) {
            console.log(err);
        }
        setIsLoaded(true)
    }

    useEffect(
        () => {
            loadImage();
        }
        , [props.id]
    )

    return (
        <div id={props.dId ? props.dId : 'id123'} className='component_AvatarImage_AvatarOuter' style={{
            minHeight: props.height, maxHeight: props.height, minWidth: props.width, maxWidth: props.width,height:props.height,width:props.width
        }}>{
            isLoaded===true?<></>:<SimpleLoadingScreen/>
        }

        </div>
    );
}

// export function AvatarImage(props) {

//     const [image, setImage] = useState();
//     const [isLoaded,setIsLoaded] = useState(false);
//     const loadImage = async () => {
//         setIsLoaded(false);
//         try {
//             let res = await axios.get(`${SERVER_ADDRESS}/user/getProfileImageById/${props.id}`,{headers:{'u-auth-token':getUserToken()}})
//             setImage(res.data.image.image)
//         } catch (err) {
//             console.log(err);
//         }
//         setIsLoaded(true)
//     }

//     useEffect(
//         () => {
//             loadImage();
//         }
//         , [props.id]
//     )

//     return (
//         isLoaded===true?<div className='component_AvatarImage_AvatarOuter' style={{
//             backgroundImage: `url(data:${image?.contentType};base64,${btoa(new Uint8Array(new Uint8Array(image?.data.data)).reduce(function (data, byte) {
//                 return data + String.fromCharCode(byte);
//             }, ''))})`, minHeight: props.height, maxHeight: props.height, minWidth: props.width, maxWidth: props.width
//         }}>

//         </div>:
//         <div  style={{minHeight: props.height, maxHeight: props.height, minWidth: props.width, maxWidth: props.width,height:props.height,width:props.width}}>
//             <SimpleLoadingScreen/>
//         </div>
//         );
// }