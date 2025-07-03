import { useState } from "react";
import Layout from "./Layout";
import {default as AboutNew} from "./common/About"
import Hero from "./common/Hero";

const About = () => {
   const [Team,setTeam] = useState([
      {
         image:"/images/team2.jpg",
         author:"Mohit Singh",
         designation:"Web Devlopment"
      },
         {
         image:"/images/team2.jpg",
         author:"Mohit Singh",
         designation:"Web Devlopment"
      },
        {
         image:"/images/team2.jpg",
         author:"Mohit Singh",
         designation:"Web Devlopment"
      },
        {
         image:"/images/team2.jpg",
         author:"Mohit Singh",
         designation:"Web Devlopment"
      },
      
    
   ])
 return (
    <>
    <Layout>
    <Hero preHeading="Quality, Integrity Value" heading="About Us" description="We excel at transforming visions into reality through outstanding craftsmanship and precise, We excel at transforming visions into reality through outstanding craftsmanship and precise"/>
    <AboutNew/>

    {/* our team */}
    <section className="our-team my-8 bg-gray-100">
      <div className="md:w-10/12 mx-auto px-8">
      <div className="text-center py-8">
        <label className="font-medium text-orange-500 text-xl">Team</label>
        <h1 className="font-bold text-3xl text-gray-800 mb-1">Our Team</h1>
        <p className="md:text-[18px] text-[16px] text-gray-900">We offer a diverse array of construction services, spanning residential, commercial, and industrial projects</p>

      </div>

      <div className="grid md:grid-cols-4 gap-10 pb-15">
         {
         Team.map((item,index)=>(
         <div className="shadow-lg rounded-xl" key={index}>
          <img src={item.image} className="cursor-pointer rounded-t-xl"/>
           <div className="my-3 px-4">
            <h1 className="font-semibold text-2xl text-gray-800">{item.author}</h1>
            <label className="font-semibold text-sm text-gray-600">{item.designation}</label>
            <a href="https://www.linkedin.in" className="text-gray-800 hover:text-orange-500 block mt-2">
               <i className="ri-linkedin-box-fill text-2xl"></i>
            </a>
           </div>
         </div>

            ))
         }
     
         
      </div>

      </div>
    </section>
    </Layout>
    
    
    </>
 )
}
export default About;