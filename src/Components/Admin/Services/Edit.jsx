import {Link} from "react-router-dom"
import Layout from "../Layout";
const Edit  = () => {
  return (
    <>
           <Layout>
             <div className="flex items-center justify-between mt-10 bg-white p-7 rounded-lg">
               <h1 className="font-bold text-2xl">
                Service Edit
                </h1>
               <Link to="/admin/service/list" className="bg-orange-500 px-7 py-3 rounded text-white text-semibold shadow-lg hover:bg-orange-600">
               <i className="ri-file-add-line mr-2"></i>
               Back</Link>
            </div>

            <div className="mt-8 bg-white p-8 rounded-lg">
                <form className="grid grid-cols-2 gap-8">
                   <div>
                      <label className="text-gray-600 text-semibold">Title*</label>
                    <div className="mt-2 h-[50px] border-b-1 border-gray-300">
                       <input type="text" className="w-full h-full focus:outline-none" placeholder="Enter Title"/>
                    </div>
                   </div>

                        <div>
                      <label className="text-gray-600 text-semibold">Slug*</label>
                    <div className="mt-2 h-[50px] border-b-1 border-gray-300">
                       <input type="text" className="w-full h-full focus:outline-none" placeholder="Enter Slug"/>
                    </div>
                   </div>

                        <div className="col-span-2 my-8">
                      <label className="text-gray-600 text-semibold">Short Description</label>
                    <div className="mt-2 h-[50px] border-b-1 border-gray-300">
                       <input type="text" className="w-full h-full focus:outline-none" placeholder="Enter Short Description"/>
                    </div>
                   </div>

                           <div className="col-span-2">
                      <label className="text-gray-600 text-semibold">Description</label>
                    <div className="mt-2 h-[50px] border-b-1 border-gray-300">
                       <input type="text" className="w-full h-full focus:outline-none" placeholder="Enter Description"/>
                    </div>
                   </div>

                    <div className="col-span-2 flex flex-col w-fit">
                      <label className="text-gray-600 text-semibold">Status</label>
                    <select className="mt-2 focus:outline-none cursor-pointer p-3 border border-gray-200">
                        <option value="1">Active</option>
                        <option value="0">Deactive</option>
                    </select>
                   </div>

                          <div className="col-span-2 w-fit">
                     
                    <button className="mt-2 focus:outline-none cursor-pointer px-6 py-3 rounded bg-orange-500 text-white hover:bg-orange-600">
                      <i className="ri-save-line mr-2"></i>
                      Save
                    </button>
                   </div>

                </form>
            </div>
       </Layout>
    </>
  )
}
export default Edit;