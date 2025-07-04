import { useState } from "react";
import Layout from "./Layout";
import Hero from "./common/Hero"
import { Link } from "react-router-dom";

const Blog = () => {
const [blog,setBlog] = useState([
      {
         title:"Dummy Blog Title",
         image:"/images/construction3.jpg",
            auther:"John Doe",
            date:"03 July,2025",
         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"
      },

         {
         title:"Dummy Blog Title",
         image:"/images/construction3.jpg",
            auther:"John Doe",
            date:"03 July,2025",
         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"
      },

         {
         title:"Dummy Blog Title",
         image:"/images/construction3.jpg",
            auther:"John Doe",
            date:"03 July,2025",
         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"
      },

          {
         title:"Dummy Blog Title",
         image:"/images/construction3.jpg",
            auther:"John Doe",
            date:"03 July,2025",
         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"
      },

          {
         title:"Dummy Blog Title",
         image:"/images/construction3.jpg",
            auther:"John Doe",
            date:"03 July,2025",
         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"
      },

          {
         title:"Dummy Blog Title",
         image:"/images/construction3.jpg",
            auther:"John Doe",
            date:"03 July,2025",
         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"
      }

      
   ])
 return (
    <>
     <Layout>
        <Hero preHeading="Quality, Integrity Value" heading="Blogs" description="We excel at transforming visions into reality through outstanding craftsmanship and precise, We excel at transforming visions into reality through outstanding craftsmanship and precise"/>


          <section className="blog-post my-15">
         <div className="md:w-10/12 mx-auto px-8 md:px-0">
        <div className="text-center">
        <label className="font-medium text-orange-500 text-xl">Blog & News</label>
        <h1 className="font-bold text-3xl text-gray-800 mb-1">Articles & Blog Posts</h1>
        <p className="md:text-[18px] text-[16px] text-gray-900">We offer a diverse array of construction services, spanning residential, commercial, and industrial projects</p>

      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {
            blog.map((item,index)=>(
             <div className="shadow-lg" key={index}>
            <img src="/images/construction3.jpg" className="cursor-pointer"/>
            <div className="p-5">
                <div className="flex md:justify-between md:flex-row flex-col md:items-center">
                    <a href="#" className="text-2xl font-bold text-gray-900 hover:text-orange-500">
                   {item.title}
                    </a>
                    <div className="flex gap-4 md:mt-0 mt-1 font-medium text-gray-600">
                        <div>
                         <i className="ri-user-line mr-2"></i>
                        <a href="#" className="hover:text-orange-500">{item.auther}</a>
                        </div>
                        
                        <div>
                            <i className="ri-calendar-2-line mr-2"></i>
                        <label>{item.date}</label>
                        </div>
                    </div>
                </div>

                    <p className="md:text-[18px] text-[16px] text-gray-800 mt-2">{item.description}</p>
               <a href="#" className="bg-orange-500 px-8 py-3 block w-fit cursor-pointer text-white font-semibold hover:bg-orange-700 md:mt-4">
                    <i className="ri-arrow-right-circle-line mr-2"></i>
                Read More</a>
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
export default Blog;