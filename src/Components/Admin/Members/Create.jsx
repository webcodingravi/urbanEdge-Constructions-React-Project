import Layout from "../Layout";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { apiUrl,token } from "../../hooks/Http";

const Create = () => {
const navigate = useNavigate();
const [imageId,setImageId] = useState(null);
const [loader,setLoader] = useState(null);
const {register,handleSubmit, formState: {errors}} = useForm();

const onSubmit = async(data) => {
   const newData = {...data, "imageId":imageId}
   setLoader(true)
   try{
     const res = await axios.post(`${apiUrl}/members`,newData,{
        headers: {
            Authorization: `Bearer ${token()}`
        }

     })
     if(res.data.status == true) {
        toast.success(res.data.message)
       navigate("/admin/member/list");
     }else{
          toast.error(res.data.message)
     }
   }
   catch(err) {
    toast.error(err.response ? err.response.data.message : err.message)
   }
   finally{
    setLoader(false)
   }

}

const handleFile = async(e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image",file);

    try{
     const res = await axios.post(`${apiUrl}/temp-images`,formData,{
        headers : {
            Authorization: `Bearer ${token()}`
        }
     })
     if(res.data.status == false) {
        toast.error(res.data.errors.image[0])

     }else{
        setImageId(res.data.data.id)
     }
    }
    catch(err) {
        toast.error(err.response ? err.response.data.message : err.message)
    }
}


 return (
    <>
    <Layout>
         <div className="flex items-center justify-between mt-10 bg-white p-7 rounded-lg">
    <h1 className="font-bold text-2xl">
    Member / Create
    </h1>
    <Link to="/admin/member/list" className="bg-orange-500 px-7 py-3 rounded text-white text-semibold shadow-lg hover:bg-orange-600">
    <i className="ri-file-add-line mr-2"></i>
    Back</Link>
</div>

<div className="mt-8 bg-white p-8 rounded-lg">
    <form className="md:grid md:grid-cols-2 gap-8" onSubmit={handleSubmit(onSubmit)}>
       <div>
            <label className="text-gray-600 text-semibold">Name</label>
            <input {...register('name',{required:"The title field is required"})} type="text" name="name" className={`w-full p-2.5 mt-3 focus:outline-none border border-gray-300 rounded ${errors.name && 'invalid:border border-pink-500'}`} placeholder="Enter Name"/>
            {errors.name && <p className="text-rose-600">{errors.name ?.message}</p>}
            
        </div>


           <div>
            <label className="text-gray-600 text-semibold">Job Title</label>
            <input {...register('job_title',{required:"The title field is required"})} type="text" name="job_title" className={`w-full p-2.5 mt-3 focus:outline-none border border-gray-300 rounded ${errors.job_title && 'invalid:border border-pink-500'}`} placeholder="Enter Job Title"/>
            {errors.job_title && <p className="text-rose-600">{errors.job_title ?.message}</p>}
            
        </div>
    

        
            <div className="col-span-2 flex flex-col gap-3">
            <label className="text-gray-600 text-semibold">Image</label>
            <input onChange={handleFile} type="file" className="p-3 border border-gray-200 cursor-pointer focus:outline-none"/>

        </div>

              <div>
            <label className="text-gray-600 text-semibold">Linkedin URL</label>
            <input {
                ...register('linkedin_url')
            } type="text" name="linkedin_url" className="w-full focus:outline-none border p-2.5 rounded mt-3 border-gray-300" placeholder="Enter Linkedin URL"/>
               

        </div>

        <div className="flex flex-col w-fit mb-10 md:mb-0">
            <label className="text-gray-600 text-semibold">Status</label>
        <select {...register('status')} name="status" className="mt-2 focus:outline-none cursor-pointer p-3 border border-gray-200">
            <option value="1">Active</option>
            <option value="0">Deactive</option>
        </select>
        </div>

            {
            loader ? 
                <div role="status">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
            :
        <button type="submit" className="mt-2 focus:outline-none cursor-pointer px-6 py-3 rounded bg-orange-500 text-white hover:bg-orange-600 w-fit">
            <i className="ri-arrow-right-circle-fill mr-2"></i>
            Submit
        </button>


        }

    </form>
</div>


    </Layout>
    </>
 )
}
export default Create;