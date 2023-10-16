import BestSellingCourses from '@/components/BestSellingCourses'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Statistics from '@/components/Statistics'
import TopCategory from '@/components/TopCategory'
import { Divider } from 'antd'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Header/>
      <TopCategory/>
      <BestSellingCourses/>
      <div className="bg-gray-900 h-fit text-white">
      <Statistics/>
      <Divider className="m-0 text-white"/>
      <Footer/>
      </div>
    </main>
  )
}
