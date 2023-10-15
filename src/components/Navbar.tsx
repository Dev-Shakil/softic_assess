'use client'

import React , {useState} from 'react';
import { Menu, Button, MenuProps, Dropdown, Drawer } from 'antd';
import { AppstoreOutlined, DownOutlined, MailOutlined, MenuOutlined, SettingOutlined } from '@ant-design/icons';


const items: MenuProps['items'] = [
  {
    label: <p className="text-gray-300 hover:text-white">Home</p>,
    key: 'Home',
  },
  {
    label:<p className="text-gray-300 hover:text-white">Courses</p>,
    key: 'Courses',
  },
  {
    label: <p className="text-gray-300 hover:text-white">About</p>,
    key: 'About',
  },
  {
    label: <p className="text-gray-300 hover:text-white">Contact</p>,
    key: 'Contact',
  },
  {
    label: <p className="text-gray-300 hover:text-white">Become an Instructor</p>,
    key: 'Instructor',
  },
  

];



const Navbar = () => {

  
  const [menuOpen, setMenuOpen] = useState(false);

  
 
  
  return (<>
  <div className={"bg-gray-900 text-white sm:hidden flex"}>
    <MenuOutlined className="text-2xl p-4" onClick={
      ()=>{
        setMenuOpen(!menuOpen)
      }
    } />
  </div>
<div className="sm:block hidden">
  <AppMenu />
  </div>
    <Drawer open={menuOpen} placement='left' closable={false} onClose={()=>{setMenuOpen(!menuOpen)}} className="bg-blue-700">
    <AppMenu isInline/>
    </Drawer>
     </>
  );

};

export default Navbar;




const AppMenu = ({isInline}:any) => {
  const [current, setCurrent] =useState('mail');
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div className={`flex bg-gray-900 text-white justify-between items-center `}><Menu className="bg-gray-900" onClick={onClick} selectedKeys={[current]} mode={isInline?"vertical":"horizontal"} items={items} />
    <div className={`flex ${isInline?"flex-col":"flex-row"}`}>
    <Dropdown menu={{ items }} placement="bottomLeft" arrow className="text-white border-none">
      <Button className="flex items-center">USD <DownOutlined /></Button>
    </Dropdown>
    <Dropdown menu={{ items }} placement="bottomLeft" arrow className="text-white border-none">
      <Button className="flex items-center">English <DownOutlined /></Button>
    </Dropdown>
    </div>
   
  </div>
  )
}


