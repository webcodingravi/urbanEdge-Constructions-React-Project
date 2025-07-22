import { useEffect, useState } from "react";
import Layout from "./Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { apiUrl, token } from "../hooks/Http"
const Dashboard = () => {
   const [dashboard, setDashboard] = useState('');


   const fetchDashboard = async () => {
      try {
         const res = await axios.get(`${apiUrl}/dashboard`, {
            headers: {
               Authorization: `Bearer ${token()}`
            }
         })
         setDashboard(res.data.data);

      }
      catch (err) {
         toast.error(err.response ? err.response.data.message : err.message);
      }
   }


   useEffect(() => {
      fetchDashboard()
   }, [])



   return (
      <>
         <Layout>
            <div className="flex items-center justify-between mt-10 bg-white p-7 rounded-lg">
               <h1 className="font-bold text-2xl">
                  Dasboard
               </h1>

            </div>

            <div className="mt-8 bg-white md:p-8 rounded-lg">
               <div className="grid md:grid-cols-4 gap-7">
                  <div className="md:px-14 px-8 py-8 shadow-lg rounded-lg flex  gap-6 items-center">
                     <div className="w-[100px] h-[100px] rounded-full bg-green-200 flex items-center justify-center cursor-pointer">
                        <i className="ri-community-line text-5xl text-green-400"></i>
                     </div>
                     <div className="flex flex-col">
                        <h1 className="text-2xl font-bold uppercase">Services</h1>
                        <p className="font-medium text-[20px] text-green-600">{dashboard.totalServices}</p>
                     </div>
                  </div>

                  <div className="md:px-14 px-8 py-8 py-8 shadow-lg rounded-lg flex  gap-6 items-center">
                     <div className="w-[100px] h-[100px] rounded-full bg-indigo-200 flex items-center justify-center cursor-pointer">
                        <i className="ri-building-line text-5xl text-indigo-400"></i>
                     </div>
                     <div className="flex flex-col">
                        <h1 className="text-2xl font-bold uppercase">Projects</h1>
                        <p className="font-medium text-[20px] text-indigo-600">{dashboard.totalProjects}</p>
                     </div>
                  </div>
                  <div className="md:px-14 px-8 py-8 py-8 shadow-lg rounded-lg flex  gap-6 items-center">
                     <div className="w-[100px] h-[100px] rounded-full bg-cyan-200 flex items-center justify-center cursor-pointer">
                        <i className="ri-news-line text-5xl text-cyan-400"></i>
                     </div>
                     <div className="flex flex-col">
                        <h1 className="text-2xl font-bold uppercase">Articles</h1>
                        <p className="font-medium text-[20px] text-cyan-600">{dashboard.totalAricles}</p>
                     </div>
                  </div>

                  <div className="md:px-14 px-8 py-8 py-8 shadow-lg rounded-lg flex  gap-6 items-center">
                     <div className="w-[100px] h-[100px] rounded-full bg-cyan-200 flex items-center justify-center cursor-pointer">
                        <i className="ri-user-community-line text-5xl text-cyan-400"></i>
                     </div>
                     <div className="flex flex-col">
                        <h1 className="text-2xl font-bold uppercase">Members</h1>
                        <p className="font-medium text-[20px] text-cyan-600">{dashboard.totalMembers}</p>
                     </div>
                  </div>


               </div>

            </div>
         </Layout >


      </>
   )
}

export default Dashboard;