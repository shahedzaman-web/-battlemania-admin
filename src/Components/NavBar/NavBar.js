import React from 'react';
import { Dropdown,Icon,Avatar } from 'rsuite';
import logo from './../../Image/logo.png'
const NavBar = () => {
    return (
        <div>
       	<nav className="bg-gray-700 h-14 flex justify-between container px-10 items-center">
               <div className="text-white">
<img src={logo} alt="" srcset="" />
               </div>
               <div className="text-white mr-20 flex">
       <div className="">
       <Avatar
      circle
     
    >
        <Icon icon="user" />
    </Avatar>
       </div>
               <Dropdown title="Admin">
    <Dropdown.Item><Icon icon="user" /> My Profile</Dropdown.Item>
    <Dropdown.Item> <Icon icon="unlock-alt" />      Change Password</Dropdown.Item>
    <Dropdown.Item> <Icon icon="key" /> Logout</Dropdown.Item>
    
  </Dropdown>
               </div>
           </nav>
	</div>
       
    );
};

export default NavBar;