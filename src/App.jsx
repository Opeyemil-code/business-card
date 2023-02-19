import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import Img from './component/img'
import Footer from './component/footer'
import SideContent from './component/side'
import Content from './component/content'

export default function Container() {
   return(
    <div className=' flex mx-auto flex-col lg:w-1/2'>
      <Img /> 
      <Content/>
      <SideContent />
      <Footer />
    </div>
   )
}