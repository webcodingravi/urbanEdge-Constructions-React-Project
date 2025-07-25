import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiUrl, fileUrl } from "../hooks/Http";

const Team = () => {
const [members,setMembers] = useState([])
const [loader,setLoader] = useState(null)


const fetchMembers = async() => {
setLoader(true)
 try{
      const res = await axios.get(`${apiUrl}/get-members`);
      setMembers(res.data.data)
 }
 catch(err) {
    toast.error(err.response ? err.response.data.message : err.message)
 }
 finally{
    setLoader(false)
 }
}

useEffect(()=>{
    fetchMembers()
},[])


return (
    <>
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

<section className="our-team my-8 bg-gray-100">
    <div className="md:w-10/12 mx-auto px-8">
    <div className="text-center py-8">
    <label className="font-medium text-orange-500 text-xl">Team</label>
    <h1 className="font-bold text-3xl text-gray-800 mb-1">Our Team</h1>
    <p className="md:text-[18px] text-[16px] text-gray-900">We offer a diverse array of construction services, spanning residential, commercial, and industrial projects</p>

    </div>

    <div className="grid md:grid-cols-4 gap-10 pb-15">
        {
         members && members.map((item,index)=>(
        <div className="shadow-lg rounded-xl" key={index}>
        <img src={`${fileUrl}/uploads/members/${item.image}`} className="cursor-pointer rounded-t-xl"/>
        <div className="my-3 px-4">
        <h1 className="font-semibold text-2xl text-gray-800">{item.name}</h1>
        <label className="font-semibold text-sm text-gray-600">{item.job_title}</label>
        {item.linkedin_url && <>
        <a target="_blank" href={item.linkedin_url} className="text-gray-800 hover:text-orange-500 block mt-2"></a>
        <i className="ri-linkedin-box-fill text-2xl"></i>
        </>
        }
        
            
        </div>
        </div>

        ))
        }
    
        
    </div>

    </div>
</section>
    }
 
    </>
)
}
export default Team;