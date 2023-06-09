import React, { useContext, useEffect } from 'react'
import './HomePage.css'
import { PostTemplate, RoundedIconButton } from './component'
import { AiOutlinePlus } from 'react-icons/ai';
import { MyContext } from '../../userHomePage';
import ChatSection from './ChatSection';



export  function UserHomePage() {


  const callback = useContext(MyContext);

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;
    let obj = document.getElementById('sample123');
    console.log('rebuilding homepage');

    obj.addEventListener('scroll', (e)=> {
      // Get the new Value
      currentScrollPosition = Math.round(obj.scrollTop);
      // console.log(currentScrollPosition);
      //Subtract the two and conclude
      if (currentScrollPosition>previousScrollPosition) {
        callback(true);
      } else if(currentScrollPosition<previousScrollPosition){
        callback(false);
      }

      // Update the previous value
      if(previousScrollPosition!==currentScrollPosition){
        previousScrollPosition = currentScrollPosition;
      }
    });
  }, []);

  // callback(true);

  return (
    <div className='user_homePage_outerDiv'>
      <div className='user_homePage_innerDiv'>
        <div id='sample123' className='user_home_postDiv'>
          
          <ChatSection/>

        </div>
        <div style={{ position: 'absolute', bottom: '15px', right: '15px' }}><RoundedIconButton><AiOutlinePlus size={25} /></RoundedIconButton></div>

        {/* <PostTemplate/> */}
      </div>
    </div>
  )
}
