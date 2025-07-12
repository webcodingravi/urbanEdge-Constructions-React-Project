import { useForm } from "react-hook-form";
import Layout from "../Layout";
import {Link,useNavigate} from "react-router-dom"
import { toast } from "react-toastify";
import axios from "axios";
import { apiUrl,token } from "../../hooks/Http";
import JoditEditor from 'jodit-react';
import React, { useState, useRef, useMemo } from 'react';


const Create = ({placeholder}) => {
   const editor = useRef(null);
	const [content, setContent] = useState('');

   	const config = useMemo(() => ({
			readonly: false,
          height: '500px',
			placeholder: placeholder || 'Content'
		}),
		[placeholder]
	);



    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate();


  const onSubmit = async(data) =>{ 
       const newData = {...data, "content" : content};
    try{
        const res = await axios.post(`${apiUrl}/services`,newData,{
         headers: {
            Authorization:`Bearer ${token()}`
         }
      })
      if(res.data.status == true) {
         toast.success(res.data.message)
         navigate("/admin/service/list")
      }else{
         toast.error(res.data.message)
      }
        

    }
    catch(err) {
      toast.error(err.response ? err.response.data.message:err.message)
    }
      
  }




    return (
              <Layout>
                  <div className="flex items-center justify-between mt-10 bg-white p-7 rounded-lg">
               <h1 className="font-bold text-2xl">
                Service Create
                </h1>
               <Link to="/admin/service/list" className="bg-orange-500 px-7 py-3 rounded text-white text-semibold shadow-lg hover:bg-orange-600">
               <i className="ri-file-add-line mr-2"></i>
               Back</Link>
            </div>

            <div className="mt-8 bg-white p-8 rounded-lg">
                <form className="md:grid md:grid-cols-2 gap-8" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                     <label className="text-gray-600 text-semibold">Title*</label>
                       <input {...register('title',{required:"The title field is required"})} type="text" name="title" className={`w-full p-2.5 mt-3 focus:outline-none border border-gray-300 rounded ${errors.title && 'invalid:border border-pink-500'}`} placeholder="Enter Title"/>
                       {errors.title && <p className="text-rose-600">{errors.title ?.message}</p>}
                       
                    </div>
               

                     <div>
                      <label className="text-gray-600 text-semibold">Slug*</label>
                       <input {
                          ...register('slug',{required:"The slug field is required"})
                       } type="text" name="slug" className={`w-full focus:outline-none border p-2.5 rounded mt-3 border-gray-300 ${errors.slug && 'invalid:border border-pink-500'}`} placeholder="Enter Slug"/>
                           {errors.title && <p className="text-rose-600">{errors.title ?.message}</p>}
            
                   </div>

                   

                        <div className="col-span-2 md:my-8 my-10">
                      <label className="text-gray-600 text-semibold">Short Description</label>
                    <textarea {...register('short_desc')} rows={2} name="short_desc" className="w-full h-full focus:outline-none border-gray-300 border mt-2 p-4 rounded" placeholder="Enter Short Description"/>
                   </div>




                  <div className="col-span-2">
                     <JoditEditor style={{height:200}}
                     ref={editor}
                     value={content}
                     config={config}
                     tabIndex={1} 
                     onBlur={newContent => setContent(newContent)} 
                     
                  />

                  </div>
              


                    <div className="col-span-2 flex flex-col w-fit md:mt-10 my-10 md:mb-0">
                      <label className="text-gray-600 text-semibold">Status</label>
                    <select {...register('status')} name="status" className="mt-2 focus:outline-none cursor-pointer p-3 border border-gray-200">
                        <option value="1">Active</option>
                        <option value="0">Deactive</option>
                    </select>
                   </div>

                   <button type="submit" className="mt-2 focus:outline-none cursor-pointer px-6 py-3 rounded bg-orange-500 text-white hover:bg-orange-600 w-fit">
                     <i className="ri-arrow-right-circle-fill mr-2"></i>
                      Submit
                    </button>

                </form>
            </div>
       
         
        </Layout>
    )
}

export default Create;