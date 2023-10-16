import Category from '@/util/category';
import React from 'react';
import SingleCategory from './SingleCategory';
import { Row } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

interface Category {
  cat_name: string,
  course_amount: number,
  cat_icon: string,
}


const TopCategory = () => {
  return (
    <div className="py-14 h-fit md:w-[70%] w-[90%] mx-auto flex justify-center flex-col items-center">
      <h2 className="text-gray-900 font-semibold text-center text-4xl mb-8">Browse top category</h2>
      <Row gutter={24} className="gap-y-3 p-4">
        {Category.map((category: Category,index ) => {
          return <SingleCategory category={category} index={index} key={category.cat_name} />;
        })}


  </Row>
     <p className="text-center mt-5 text-md">We have more category & subcategory. <button className="ml-4 text-[#FF6636]">Browse All <ArrowRightOutlined /></button></p>
    </div>
  );
};

export default TopCategory;






