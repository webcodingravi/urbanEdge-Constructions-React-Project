import Layout from "./Layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import About from "./common/About";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [services,setServices] = useState([
        {
            title:"Kolkata Project",
            image:"/images/construction2.jpg",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"

        },

         {
            title:"Kolkata Project",
            image:"/images/construction3.jpg",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"
        },

         {
            title:"Delhi Project",
            image:"/images/construction4.jpg",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"
        }
    ])

        const [projects,setProjects] = useState([
        {
            title:"Kolkata Project",
            image:"/images/construction2.jpg",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"

        },

         {
            title:"Kolkata Project",
            image:"/images/construction3.jpg",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"
        },

         {
            title:"Delhi Project",
            image:"/images/construction4.jpg",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"
        }
    ])

    const [WhyChoose, setWhyChoose] = useState([
        {
            title:"Cutting-Edge Solutions",
            image:"/images/icon-1.svg",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"
        },

            {
            title:"Cutting-Edge Solutions",
            image:"/images/icon-2.svg",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"
        },

         {
            title:"Cutting-Edge Solutions",
            image:"/images/icon-3.svg",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"
        }
    ])

    const [testimonials,setTestimonials] = useState([
        {
           rating:"http://www.w3.org/2000/svg",
                
            image:"/images/author-2.jpg",
            auther:"John Doe",
            designation:"ceo",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!" 
        },

        {
           rating:"http://www.w3.org/2000/svg",
            image:"/images/author-2.jpg",
            auther:"John Doe",
            designation:"ceo",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!" 
        },

        {
           rating:"http://www.w3.org/2000/svg",
                
            image:"/images/author-2.jpg",
            auther:"John Doe",
            designation:"ceo",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!" 
        }
    ])

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
        }
    ])
 return (
    <>
    <Layout>
      <section className="banner-section min-h-screen flex items-center justify-center object-cover" 
      style={{backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),url('/images/hero.jpg')",
      backgroundRepeat:'no-repeat',backgroundAttachment:'fixed'}}>
         <div className="text-center mx-auto md:w-6/12 flex flex-col gap-2 px-8">
            <label className="font-semibold md:text-[20px] text-xl text-orange-400">Welcome Amazing Constructions</label>
            <h1 className="font-bold md:text-7xl text-4xl text-white">Crafting dreams with <br/>precision and excellence.</h1>
            <p className="text-medium text-white md:text-[18px] text-[16px] md:pt-6 pt-2">We excel at transforming visions into reality through outstanding craftsmanship and precise, We excel at transforming visions into reality through outstanding craftsmanship and precise</p>
            <div className="mt-6 flex flex-col gap-8 md:flex-row md:gap-6 mx-auto">
                <Link to="/contact-us" className="bg-orange-500 px-8 py-3 cursor-pointer text-white font-semibold hover:bg-orange-700">
                    <i className="ri-arrow-right-circle-line mr-2"></i>
                    Contact Now</Link>
            <Link to="/projects" className="px-8 py-3 cursor-pointer text-white font-semibold border-1 border-white hover:bg-rose-500 hover:border-rose-600">
                <i className="ri-building-line mr-2"></i>
                View Projects</Link>
            </div>
         </div>
     </section>

       <About/>


     <section className="service-section my-8 py-8">
     <div className="md:w-10/12 mx-auto px-8 md:px-0">
      <div className="text-center">
        <label className="font-medium text-orange-500 text-xl">Our Services</label>
        <h1 className="font-bold text-3xl text-gray-800 mb-1">Our Construction Services</h1>
        <p className="md:text-[18px] text-[16px] text-gray-900">We offer a diverse array of construction services, spanning residential, commercial, and industrial projects</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 my-8">
              {
                services.map((item,index)=>(
            <div className="shadow-lg relative overflow-hidden" key={index}>
            <div className="relative h-full w-full">
                 <img src={item.image} className="cursor-pointer"  />
                  <div className="absolute top-0 left-0 h-full w-full" style={{backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)"}}></div>
            </div>
           
           <div className="absolute md:-bottom-50 bottom-0 left-0 md:px-4 px-2 md:my-8 hover:bottom-0 cursor-pointer" style={{transition:"0.5s"}}>
               <h1 className="font-bold md:text-3xl text-xl text-white md:mb-3">{item.title}</h1>
                <p className="md:text-[18px] text-[16px] text-white">{item.description}</p>
               <button className="bg-orange-500 md:px-8 px-2 md:py-3 py-1 cursor-pointer text-white font-semibold hover:bg-orange-700 md:mt-4">
                    <i className="ri-arrow-right-circle-line mr-2"></i>
                Read More</button>
            </div>
        </div>
                ))
              }
      </div>

     </div>
       <div className="text-center mt-15 mb-4">
                   <Link to="/service" className="bg-orange-500 px-4 py-3  cursor-pointer text-white font-semibold hover:bg-orange-700 md:mt-4 rounded-lg shadow-lg">
                    <i className="ri-arrow-right-circle-line mr-2"></i>
                View All Services</Link>
      </div>
     </section>




      <section className="why-choose my-8">
         <div className="md:w-10/12 mx-auto px-8 md:px-0">
            <div className="text-center">
        <label className="font-medium text-orange-500 text-xl">Why Choose Us</label>
        <h1 className="font-bold text-3xl text-gray-800 mb-1">Discover our wide variety of projects</h1>
        <p className="md:text-[18px] text-[16px] text-gray-900">We offer a diverse array of construction services, spanning residential, commercial, and industrial projects</p>

      </div>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
                {
                    WhyChoose.map((item,index)=>(
                    <div className="shadow-lg p-8" key={index}>
                 <img src={item.image} className="w-25"/>
                    <h1 className="text-2xl font-semibold mb-2 text-gray-800">{item.title}</h1>
                    <p className="md:text-[18px] text-[16px] text-gray-900">{item.description}</p>
                  </div>
                    ))
                }
          
         </div>
         </div>

   
      </section>


      
      <section className="project-section bg-gray-100 my-10 py-8">
     <div className="md:w-10/12 mx-auto px-8 md:px-0">
      <div className="text-center">
        <label className="font-medium text-orange-500 text-xl">Our Projects</label>
        <h1 className="font-bold text-3xl text-gray-800 mb-1">Discover our diverse range of projects</h1>
        <p className="md:text-[18px] text-[16px] text-gray-900">We offer a diverse array of construction services, spanning residential, commercial, and industrial projects</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 my-8">
              {
                projects.map((item,index)=>(
            <div className="shadow-lg relative overflow-hidden" key={index}>
            <div className="relative h-full w-full">
                 <img src={item.image} className="cursor-pointer"  />
                  <div className="absolute top-0 left-0 h-full w-full" style={{backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)"}}></div>
            </div>
           
           <div className="absolute md:-bottom-50 bottom-0 left-0 md:px-4 px-2 md:my-8 hover:bottom-0 cursor-pointer" style={{transition:"0.5s"}}>
               <h1 className="font-bold md:text-3xl text-xl text-white md:mb-3">{item.title}</h1>
                <p className="md:text-[18px] text-[16px] text-white">{item.description}</p>
               <button className="bg-orange-500 md:px-8 px-2 md:py-3 py-1 cursor-pointer text-white font-semibold hover:bg-orange-700 md:mt-4">
                    <i className="ri-arrow-right-circle-line mr-2"></i>
                Read More</button>
            </div>
        </div>
                ))
              }
      </div>

     </div>
       <div className="text-center mt-15 mb-4">
                   <Link to="/projects" className="bg-orange-500 px-4 py-3  cursor-pointer text-white font-semibold hover:bg-orange-700 md:mt-4 rounded-lg shadow-lg">
                    <i className="ri-arrow-right-circle-line mr-2"></i>
                View All Projects</Link>
      </div>
     </section>

      <section className="testimonials mt-15">
        <div className="md:w-10/12 mx-auto px-8 md:px-0">
        <div className="text-center">
        <label className="font-medium text-orange-500 text-xl">Testimonials</label>
        <h1 className="font-bold text-3xl text-gray-800 mb-1">What people are saying about us</h1>
        <p className="md:text-[18px] text-[16px] text-gray-900">We offer a diverse array of construction services, spanning residential, commercial, and industrial projects</p>
      </div>

        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
        >
      
        {
            testimonials.map((item,index)=>(
            <SwiperSlide className="py-10 px-3" key={index}> 
            <div className="p-8 shadow-lg">
            <div className="flex items-center">
                   <svg className="w-5 h-5 text-yellow-300 ms-1" aria-hidden="true" xmlns={item.rating} fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-5 h-5 text-yellow-300 ms-1" aria-hidden="true" xmlns={item.rating}  fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-5 h-5 text-yellow-300 ms-1" aria-hidden="true" xmlns={item.rating}  fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-5 h-5 text-yellow-300 ms-1" aria-hidden="true" xmlns={item.rating}  fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns={item.rating}  fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <div className="pt-3">
                <p className="md:text-[18px] text-[16px] text-gray-900">{item.description}</p>
            </div>
             <hr className="mt-7 text-gray-200"/>
             <div className="mt-3">
                <div className="flex gap-3">
                    <img src={item.image} className="cursor-pointer rounded-full h-12 w-12"/>
                    <div>
                    <h1 className="font-semibold text-[18px] text-gray-900">{item.auther}</h1>
                    <label className="text-gray-900 uppercase">{item.designation}</label>
                    </div>
                </div>
                

             </div>
            </div>
            </SwiperSlide>
            ))
        }
 
        </Swiper>

        </div>
      </section>

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
           <div className="text-center my-12">
                   <Link to="/blog" className="bg-orange-500 px-4 py-3  cursor-pointer text-white font-semibold hover:bg-orange-700 md:mt-4 rounded-lg shadow-lg">
                    <i className="ri-arrow-right-circle-line mr-2"></i>
                View All Posts</Link>
      </div>
         </div>
       
      </section>
    </Layout>

   
    </>
 )
}

export default Home;