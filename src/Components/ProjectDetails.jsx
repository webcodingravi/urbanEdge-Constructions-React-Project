import { useEffect, useState } from "react"
import Hero from "./common/Hero"
import Layout from "./Layout"
import { toast } from "react-toastify"
import axios from "axios"
import { apiUrl, fileUrl } from "./hooks/Http"
import { useParams } from "react-router-dom"
import ShowTestimonials from "./common/ShowTestimonials"

const ProjectDetails = () => {

    const params = useParams();
    const [singleProject, setSingleProject] = useState([]);
    const [loader,setLoader] = useState(null);



   const fetchSingleProject= async() => {
    setLoader(true)
    try{
      const res = await axios.get(`${apiUrl}/single-project/${params.slug}`)
      setSingleProject(res.data.data);
   
    }
    catch(err) {
        toast(err.response ? err.response.data.message : err.message)
    }
    finally{
        setLoader(false)

    }
    
    }
    

    useEffect(()=>{
 
        fetchSingleProject()
    },[params.slug])
    

 return (
    <>
    <Layout>
        <Hero preHeading="Quality, Integrity Value" heading={singleProject.title} />

        {
                loader ?     
         <div role="status" className="flex items-center justify-center min-h-screen w-full">
         <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
         </svg>
         <span className="sr-only">Loading...</span>
      </div>
      :

       <section className="my-8">
            <div className="flex md:flex-row flex-col gap-8 md:w-10/12 mx-auto md:px-0 px-8">
            <div className="shadow-lg p-8 md:w-3/12 h-fit">
            <h1 className="text-2xl font-bold text-gray-800 border-b-slate-200 border-b pb-4">Insights</h1>
            <ul className="mt-6">
                {
                   singleProject.location && 
                    <li className="mb-4">
                    <span  className="font-medium text-gray-400 text-[18px]">Location</span>
                    <p className="text-gray-700">{singleProject.location}</p>
                </li>
                }

                     {
                   singleProject.construction_type && 
                    <li className="mb-4">
                    <span  className="font-medium text-gray-400 text-[18px]">Location</span>
                    <p className="text-gray-700">{singleProject.construction_type}</p>
                </li>
                }

                     {
                   singleProject.sector && 
                    <li className="mb-4">
                    <span className="font-medium text-gray-400 text-[18px]">Sector</span>
                    <p className="text-gray-700">{singleProject.sector}</p>
                </li>
                }
               

           
            
                
            </ul>
           </div>
           <div className="flex-1 shadow-lg">
            <img src={`${fileUrl}/uploads/projects/large/${singleProject.image}`} className="cursor-pointer rounded-t-lg"/>
            <div className="px-4 py-8">
                <h1 className="text-3xl font-bold capitalize mb-4">{singleProject.title}</h1>
            <div dangerouslySetInnerHTML={{__html:singleProject.content}}></div>
            </div>
           </div>

            </div>
       
        </section>

        }

        <div className="bg-gray-100 pt-8 pb-12">
            <ShowTestimonials/>
        </div>

       

        </Layout>
    </>
 )
}

export default ProjectDetails;