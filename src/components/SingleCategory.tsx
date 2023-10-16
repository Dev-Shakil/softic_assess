
import { Card, Col } from 'antd';
import Image from 'next/image';
import React, { useEffect } from 'react';

interface CategoryProps {
  category: {
    cat_name: string;
    course_amount: number;
    cat_icon: string;
  };
  index: number
}

const SingleCategory: React.FC<CategoryProps> = ({ category,index }) => {

  

  const bgColors = ["#EBEBFF","#E1F7E3","#FFF2E5","#FFF0F0","#F5F7FA","#FFEEE8"];
  const backgroundColor = bgColors[index % bgColors.length]; 
  return (
    <Col xs={24} md={8} xl={6} className={`min-w-[312px] `}>
      <Card bordered={true} style={{ background: backgroundColor }} >
        <div className="flex items-center gap-3">
      <div className={`${category.cat_name==="Personal Development"?"bg-[#FF6636]":"bg-white"} p-2`}>
        <Image src={category.cat_icon} width={32} height={32} alt={category.cat_name}/>
      </div>
      <div>
          <h3 className="text-gray-900 font-medium text-lg">{category.cat_name}</h3>
          <p>{category.course_amount} Courses</p>
      </div>
      </div>
      </Card>
    </Col>
   
  );
}

export default SingleCategory;