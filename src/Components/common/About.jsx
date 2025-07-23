import axios from "axios";
import { useEffect, useState } from "react";
import { apiUrl, fileUrl } from "../hooks/Http";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const About = () => {

   const [about, setAbout] = useState({})

   const fetchAbout = async () => {

      try {
         const res = await axios.get(`${apiUrl}/about-us`)
         setAbout(res.data.data)

      }
      catch (err) {
         toast.error(err.response ? err.response.data.message : err.message)
      }

   }

   useEffect(() => {
      fetchAbout()
   }, [])



   return (
      <>
         <section className="about-section my-16">
            <div className="md:w-10/12 grid md:grid-cols-2 md:gap-8 gap-2 mx-auto px-8 md:px-0">
               <div className="cursor-ponter rounded-lg mb-2 md:mb-0 object-cover">
                  <img src={`${fileUrl}/uploads/abouts/small/${about.image}`} className="cursor-pointer rounded-lg w-full h-full" />
               </div>
               <div>
                  <label className="font-semibold text-orange-600 text-xl uppercase">{about.title}</label>
                  <div className="text-semibold md:text-[18px] text-[16px] text-gray-900" dangerouslySetInnerHTML={{ __html: about.description }}></div>

               </div>
            </div>
         </section >
      </>
   )
}

export default About;