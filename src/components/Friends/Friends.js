import React from 'react';
import './Frineds.css';
import { BsFillPersonPlusFill } from "react-icons/bs";



const Friends = (props) => {
      // console.log(props);
      const {Name,Image,email,slary} = props.user;
      // const userStyle ={
      //       borderRight: '1px solid lightgray',
      //       margin : '5px',
      //       padding : "10px",
      //       display :'flex',
      //       width : '70%',
            
      // } 
      return (
            <div className='details'>
                  <div className='image'>
                        <img  src={Image} alt="" />
                  </div>
                  <div>
                  <p className='name'>Name :{Name}</p>
                  <p className='email'>Email : {email}</p>
                  <p>Salary :{slary}</p>
                  <button className='mainbtn' onClick={()=>props.handleButton(props.user)}><BsFillPersonPlusFill></BsFillPersonPlusFill>Add Me</button>
                  </div>
                  
            </div>
           
                
                  
      );
};

export default Friends;