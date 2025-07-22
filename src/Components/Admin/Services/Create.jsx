import { useForm } from "react-hook-form";
import Layout from "../Layout";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import axios from "axios";
import { apiUrl, token } from "../../hooks/Http";
import JoditEditor from 'jodit-react';
import React, { useState, useRef, useMemo } from 'react';


const Create = ({ placeholder }) => {
   const editor = useRef(null);
   const [content, setContent] = useState('');
   const [imageId, setImageId] = useState(null)
   const [loader, setLoader] = useState(false)

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


   const onSubmit = async (data) => {
      const newData = { ...data, "content": content, "imageId": imageId };
      setLoader(true)
      try {
         const res = await axios.post(`${apiUrl}/services`, newData, {
            headers: {
               Authorization: `Bearer ${token()}`
            }
         })
         if (res.data.status == true) {
            toast.success(res.data.message)
            navigate("/admin/service/list")
         } else {
            toast.error(res.data.message)
         }


      }
      catch (err) {
         toast.error(err.response ? err.response.data.message : err.message)
      }
      finally {
         setLoader(false)
      }

   }


   const handleFile = async (e) => {
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append("image", file)

      try {
         const res = await axios.post(`${apiUrl}/temp-images`, formData, {
            headers: {
               Authorization: `Bearer ${token()}`
            }
         })

         if (res.data.status == false) {
            toast.error(res.data.errors.image[0]);
         } else {
            setImageId(res.data.data.id)

         }


      }
      catch (err) {
         toast.error(err.response ? err.response.data.message : err.message)
      }
   }



   return (
      <Layout>
         <div className="flex items-center justify-between mt-10 bg-white p-7 rounded-lg">
            <h1 className="font-bold text-2xl">
               Service / Create
            </h1>
            <Link to="/admin/service/list" className="bg-orange-500 px-7 py-3 rounded text-white text-semibold shadow-lg hover:bg-orange-600">
               <i className="ri-file-add-line mr-2"></i>
               Back</Link>
         </div>

         <div className="mt-8 bg-white p-8 rounded-lg">
            <form className="md:grid md:grid-cols-2 gap-8" onSubmit={handleSubmit(onSubmit)}>
               <div>
                  <label className="text-gray-600 text-semibold">Title*</label>
                  <input {...register('title', { required: "The title field is required" })} type="text" name="title" className={`w-full p-2.5 mt-3 focus:outline-none border border-gray-300 rounded ${errors.title && 'invalid:border border-pink-500'}`} placeholder="Enter Title" />
                  {errors.title && <p className="text-rose-600">{errors.title?.message}</p>}

               </div>


               <div>
                  <label className="text-gray-600 text-semibold">Slug*</label>
                  <input {
                     ...register('slug', { required: "The slug field is required" })
                  } type="text" name="slug" className={`w-full focus:outline-none border p-2.5 rounded mt-3 border-gray-300 ${errors.slug && 'invalid:border border-pink-500'}`} placeholder="Enter Slug" />
                  {errors.title && <p className="text-rose-600">{errors.title?.message}</p>}

               </div>



               <div className="col-span-2 md:mb-8 mb-10">
                  <label className="text-gray-600 text-semibold">Short Description</label>
                  <textarea {...register('short_desc')} rows={2} name="short_desc" className="w-full h-full focus:outline-none border-gray-300 border mt-2 p-4 rounded" placeholder="Enter Short Description" />
               </div>



               <div className="col-span-2">
                  <JoditEditor style={{ height: 200 }}
                     ref={editor}
                     value={content}
                     config={config}
                     tabIndex={1}
                     onBlur={newContent => setContent(newContent)}

                  />

               </div>

               <div className="col-span-2 flex flex-col gap-3">
                  <label className="text-gray-600 text-semibold">Image</label>
                  <input onChange={handleFile} type="file" className="p-3 border border-gray-200 cursor-pointer focus:outline-none" />

               </div>




               <div className="col-span-2 flex flex-col w-fit mb-10 md:mb-0">
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
                           <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                           <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
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
   )
}

export default Create;