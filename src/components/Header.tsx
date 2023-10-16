'use client'

import { Button, Col, Flex, Row, Typography } from "antd";
import Image from "next/image";
import React from "react";

const Header = () => {
    return(
      <header className="flex bg-[#F0F2F5] md:h-[548px] h-[80vh] justify-around flex-wrap">
      <div className="flex flex-col md:w-1/2 w-full my-auto">
        <div className="lg:w-[550px]  md:ml-[30px] lg:ml-[80px] xl:ml-[280px] mx-auto ml-10">
          <h2 className="font-semibold md:text-6xl text-3xl leading-12 tracking-tight">
            Learn with experts anytime anywhere
          </h2>
          <p className="text-gray-700 py-4 md:py-8">
            Our mission is to help people find the best online courses and learn from experts anytime, anywhere.
          </p>
          <button className="bg-[#FF6636] text-white p-4 w-fit mx-auto md:mx-0">Create Account</button>
        </div>
      </div>
      <div className="md:w-1/2 w-full flex justify-center md:justify-end">
        <Image src="/header.png" alt="Header Image" width={800} height={548} className="" />
      </div>
    </header>
    )
}
export default Header;
