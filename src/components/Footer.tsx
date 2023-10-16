'use client'
import { ArrowRightOutlined, DownOutlined } from '@ant-design/icons'
import { Button, Col, Dropdown, MenuProps, Space, message } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const items: MenuProps['items'] = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
    {
      label: '4rd menu item',
      key: '4',
    },
  ];
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

const Footer = () => {
   
  return (
    <>
   
    <footer className="text-gray-600 body-font">
    <div className="border-t border-gray-700">
      <div className="flex md:w-[80%] w-[95%] mx-auto min-h-[300px] py-4 justify-center items-center gap-5 ">
          <div className="md:w-4/12 w-12/12 flex flex-col gap-y-6 flex-wrap">
            <Image src={"/LOGO.png"} alt={"Logo"} width={200} height={150}/>
            <p className="text-sm tracking-wider leading-6 text">Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.</p>
            <div className="flex gap-4">
              <button className="px-8 py-6 hover:bg-[#FF6636] transition-all-ease duration-300 bg-gray-800"><Image src={"/social_icons/FaceIcon.png"} alt="facebook" width={15} height={15} className="" /></button>
              <button className="px-8 py-6 hover:bg-[#FF6636] transition-all-ease duration-300 bg-gray-800"><Image src={"/social_icons/Instragarm.png"} alt="Instragarm" width={15} height={15} className="" /></button>
              <button className="px-8 py-6 hover:bg-[#FF6636] transition-all-ease duration-300 bg-gray-800"><Image src={"/social_icons/Linkedin.png"} alt="facebook" width={15} height={15} className="" /></button>
              <button className="px-8 py-6 hover:bg-[#FF6636] transition-all-ease duration-300 bg-gray-800"><Image src={"/social_icons/Twitter.png"} alt="facebook" width={15} height={15} className="" /></button>
              <button className="px-8 py-6 hover:bg-[#FF6636] transition-all-ease duration-300 bg-gray-800"><Image src={"/social_icons/Youtube.png"} alt="facebook" width={15} height={15} className="" /></button>
            </div>
          </div>
          <div className="md:w-2/12 w-5/12 text-start flex flex-col gap-4">
            <h3 className="tex-lg text-white">Top 4 Categories</h3>
            <p className="hover:border-b border-[#FF6636] hover:text-white w-fit">Development <ArrowRightOutlined className="" /></p>
            <p className="hover:border-b border-[#FF6636] hover:text-white w-fit">Finance & Accounting <ArrowRightOutlined className="" /></p>
            <p className="hover:border-b border-[#FF6636] hover:text-white w-fit">Design <ArrowRightOutlined className="" /></p>
            <p className="hover:border-b border-[#FF6636] hover:text-white w-fit">Business <ArrowRightOutlined className="" /></p>
           
          </div>
          <div className="md:w-2/12 w-5/12 text-start flex flex-col gap-4">
            <h3 className="tex-lg text-white">QUICK LINKS</h3>
            <p className="hover:border-b border-[#FF6636] hover:text-white w-fit"> About <ArrowRightOutlined className="" /></p>
            <p className="hover:border-b border-[#FF6636] hover:text-white w-fit">Become Instructor <ArrowRightOutlined className="" /></p>
            <p className="hover:border-b border-[#FF6636] hover:text-white w-fit">Contact<ArrowRightOutlined className="" /></p>
            <p className="hover:border-b border-[#FF6636] hover:text-white w-fit">Career <ArrowRightOutlined className="" /></p>
           </div>
           <div className="md:w-2/12 w-5/12 text-start flex flex-col gap-4">
            <h3 className="tex-lg text-white">Support</h3>
            <p className="hover:border-b border-[#FF6636] hover:text-white w-fit">Help Center <ArrowRightOutlined className="" /></p>
            <p className="hover:border-b border-[#FF6636] hover:text-white w-fit">FAQs <ArrowRightOutlined className="" /></p>
            <p className="hover:border-b border-[#FF6636] hover:text-white w-fit">Terms & Conditions<ArrowRightOutlined className="" /></p>
            <p className="hover:border-b border-[#FF6636] hover:text-white w-fit">Privacy Policy<ArrowRightOutlined className="" /></p>
           </div>
           <div className="md:w-2/12 w-5/12 text-start flex flex-col gap-4">
            <h3 className="tex-lg text-white">Download Our Apps</h3>

           </div>
      </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="md:w-[80%] w-[95%] mx-auto py-4 px-5 flex flex-wrap flex-col items-center sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2021 - Eduflex. Designed by <span className="text-white">Templatecookie</span>. All rights reserved 
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <Dropdown menu={menuProps}>
      <Button className="py-6 px-10 tracking-widest w-fit flex justify-center items-center text-white ">
        <Space >
          English
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
          
          
           
          </span>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer