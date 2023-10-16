import { Button, Col, Divider, Row,} from 'antd'
import React from 'react'
const Statistics: React.FC = () => {
   
  return (
    <>
        <div className="md:w-[70%] w-[90%] mx-auto flex justify-between flex-wrap gap-y-6 items-center">
        <div className="md:w-5/12 w-12/12">
            <h2 className="font-semibold md:text-[40px] text-[30px] leading-10">Start learning with 67.1k students aroun the world</h2>
            <div className="flex gap-4 mt-5">
            <Button className="bg-[#FF6636] border-none py-3 px-7 flex justify-center items-center rounded-none text-white h-10">Join The Family</Button>
            <Button className="bg-gray-800 py-3 px-7 border-none flex justify-center items-center rounded-none text-white h-10">Browse All Courses</Button>
          
            </div>
        </div>
        <div className="md:w-7/12 w-12/12 flex md:justify-center ">
        <Row gutter={24} className="text-white md:w-[70%] w-[100%]">
    <Col span={8}>
      <div>
        <p className="text-[40px] font-semibold">6.3k</p>
        <p className="text-[16px] text-gray-300 font-medium">Online Courses</p>
      </div>
    </Col>
    <Col span={8}>
    <div>
        <p className="text-[40px] font-semibold">26k</p>
        <p className="text-[16px] text-gray-300 font-medium">Certified Instructor</p>
      </div>
    </Col>
    <Col span={8}>
    <div>
        <p className="text-[40px] font-semibold">99.9%</p>
        <p className="text-[16px] text-gray-300 font-medium">Success Rate</p>
      </div>
    </Col>
  </Row>
        </div>
        </div>
    </>
  )
}

export default Statistics;