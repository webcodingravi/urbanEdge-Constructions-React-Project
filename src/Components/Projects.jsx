import { useState } from "react"
import Layout from "./Layout"
import Hero from "./common/Hero"
const Projects = () => {
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
},

    {
    title:"Delhi Project",
    image:"/images/construction4.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"
},

    {
    title:"Delhi Project",
    image:"/images/construction4.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"
},
    {
    title:"Delhi Project",
    image:"/images/construction4.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"
}
])
 return (
    
    <>
    <Layout>
      <Hero preHeading="Quality, Integrity Value" heading="Our Projects" description="We excel at transforming visions into reality through outstanding craftsmanship and precise, We excel at transforming visions into reality through outstanding craftsmanship and precise"/>


     <section className="project-section bg-gray-100 my-8 py-8">
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
    
     </section>
    </Layout>
    </>
 )
}

export default Projects;