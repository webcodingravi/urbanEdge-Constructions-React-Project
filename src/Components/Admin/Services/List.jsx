import {Link} from "react-router-dom"
import Layout from "../Layout";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiUrl, token } from "../../hooks/Http";
import axios from "axios";

const List = () => {
    const [services, setServices] = useState([])
    const [loader,setLoader] = useState(false)

        const fetchServices = async() => {
            setLoader(true)
            try{
             const res = await axios.get(`${apiUrl}/services`,{
                headers : {
                    Authorization:`Bearer ${token()}`
                }
             })
             setServices(res.data.data)
            }
            catch(err) {
                toast.error(err.response ? err.response.data.message : err.message)
            }

             finally{
            setLoader(false)
              }
        }
       
    useEffect(()=>{
        fetchServices();
    },[])

    return (
        <>
<Layout>
    <div className="flex items-center justify-between mt-10 bg-white p-7 rounded-lg">
        <h1 className="font-bold text-2xl">
        Service List
        </h1>
        <Link to="/admin/service/create" className="bg-orange-500 px-7 py-3 rounded text-white text-semibold shadow-lg hover:bg-orange-600">
        <i className="ri-file-add-line mr-2"></i>
        Add Student</Link>
    </div>

    <div className="mt-8">
    
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
<table className="w-full overflow-auto">
    <thead className="bg-slate-600 text-white">
        <tr>
        <th className="px-8 py-5 text-start">S.No.</th>
        <th className="px-8 py-5 text-start">Title</th>
        <th className="px-8 py-5 text-start">Slug</th>
        <th className="px-8 py-5 text-start">Action</th>
        <th className="px-8 py-5 text-start">Action</th>
        </tr>
            </thead>

            <tbody>
            {services && services.map((item,index)=>(
            <tr className={`${index % 2 == 0 ? 'bg-gray-200': 'bg-white'}`} key={index}>
                <td className="px-8 py-5">{index+1}</td>
                <td className="px-8 py-5">{item.title}</td>
                <td className="px-8 py-5">{item.slug}</td>
                <td className="px-8 py-5">
                {
                item.status == 1 ?
                    <span className="bg-green-600 text-green-100 p-1 rounded">Active</span>
                    :
                    <span className="bg-rose-600 text-rose-100 p-1 rounded">Deactive</span>
                }
                </td>
                <td className="px-8 py-5 flex gap-2">
                    <Link to="/admin/service/edit" className="bg-green-500 w-[30px] h-[30px] rounded-full cursor-pointer text-white hover:bg-green-600 flex items-center justify-center">
                    <i className="ri-edit-circle-fill"></i></Link>
                    <button className="bg-rose-500 w-[30px] h-[30px] rounded-full cursor-pointer text-white hover:bg-rose-600">
                    <i className="ri-delete-bin-6-line">
                        </i>
                    </button>
                </td>
            </tr>

                ))
            }
    
        </tbody>
    </table>

        }
                   
            </div>
        </Layout>
        </>
    )
}
export default List;