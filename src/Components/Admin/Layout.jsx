import { useContext, useState } from "react";
import { Link, useLocation} from "react-router-dom";
import {AuthContext} from '../Admin/Context/Auth'
import { useIsDesktop } from "../hooks/useIsDesktop"; // path as per your structure

const Layout = ({children}) => {
const [openSider, setOpenSidebar] = useState(240) 
const [profile,setProfile] = useState(false)
const [mobileSize, setMobileSize] = useState(0)
const {logout} = useContext(AuthContext)
const isDesktop = useIsDesktop();
const location = useLocation()
    const menus = [
    {
        label:"Dashboard",
        icon:<i className="ri-dashboard-2-line mr-2"></i>,
        href:"/admin/dashboard"
    },

      {
        label:"Services",
        icon:<i className="ri-dashboard-2-line mr-2"></i>,
        href:"/admin/service/list"
    },

      {
        label:"Projects",
        icon:<i className="ri-building-line mr-2"></i>,
        href:""
    },

        {
        label:"Articals",
        icon:<i className="ri-building-line mr-2"></i>,
        href:""
    }

]

 if (isDesktop) {
 return (
    <>
        {/* desktop sider bar */}
     <div className="md:flex hidden">
        <aside className="min-h-screen bg-orange-600 md:flex flex-col fixed top-0 left-0 overflow-hidden" style={{width:openSider, transition:'0.3s'}}>
            {
                menus.map((item,key)=>(
               <div className={`p-4 cursor-pointer hover:bg-rose-600 ${location.pathname === item.href ? 'bg-rose-600' : ''} text-white text-[18px]`} key={key}>
                
                {item.icon}
             <Link to={item.href}>{item.label}</Link>
             </div>
                ))
            }
        </aside>

        <div className="w-full bg-slate-100 min-h-screen" style={{marginLeft:openSider,transition:'0.3s'}}>
            <div className="bg-white py-4 px-8 flex justify-between items-center sticky top-0 left-0 shadow">
             <div className="flex gap-4 items-center">
                <button className="cursor-ponter cursor-pointer hover:text-white hover:bg-orange-600 text-orange-600 font-medium" onClick={()=>setOpenSidebar(openSider == 0 ? 255 : 0)}>
                <i className="ri-menu-3-line text-[23px]"></i>
                </button>
                <div className="flex gap-2">
                    <img src="/images/logo/logo.png" className="cursor-pointer w-[55px]"/>
                    <h1 className="font-bold text-[14px] uppercase text-gray-600 cursor-pointer">UrbanEdge <span className='text-orange-600'><br/>Constructions</span></h1>

                </div>
             </div>
                 
                 <div>

                 </div>


                 
                 <div className="w-[50px] h-[50px] bg-rose-600 rounded-full object-cover relative" onClick={()=>setProfile(!profile)}>
                    <img src="/images/author-2.jpg" className="cursor-pointer w-full h-full rounded-full"/>
                     
                        {
                        profile &&

                       <div className="py-5 shadow-xl bg-white absolute top-14 -left-26">
                       <div className=" flex gap-2 hover:bg-orange-600 hover:text-white text-gray-900 w-full p-2">
                         <i className="ri-user-line"></i>
                          <Link to="">Ravi Kumar</Link>
                       </div>

                    <div className=" flex gap-2 hover:bg-orange-600 hover:text-white text-gray-900 w-full p-2">
                        <i className="ri-mail-ai-line"></i>
                          <Link to="">ravi@gmail.com</Link>
                       </div>

                        <div className="flex gap-2 hover:bg-orange-600 hover:text-white text-gray-900 w-full p-2">
                        <i className="ri-logout-circle-r-line"></i>
                          <button onClick={logout} className="cursor-pointer">Logout</button>
                       </div>
                     </div>
                    }

                
                 </div>

            </div>
            <div className="p-8">
                {children}
            </div>
         
        </div>
     </div>
    </>
)

 }else{
    return(
        <>
        {/* mobile version siderbar */}
  
     <div className="flex md:hidden">
        <aside className="min-h-screen bg-orange-600 md:flex flex-col fixed top-0 left-0 overflow-hidden" style={{width:mobileSize ,transition:'0.3s'}}>
            <button className="hover:bg-orange-800 p-5 text-white" onClick={()=>setMobileSize(mobileSize == 0 ? 255 : 0)}>
                <i className="ri-menu-3-line text-[23px]"></i>
            </button>
            {
                menus.map((item,key)=>(
               <div className="p-4 hover:bg-rose-600 cursor-pointer  text-white text-[18px]" key={key}>
                
                {item.icon}
             <Link to={item.href}>{item.label}</Link>
             </div>
                ))
            }
        </aside>
        <div className="w-full bg-slate-100 min-h-screen">
            <div className="bg-white py-4 px-8 flex justify-between items-center shadow">
             <div className="flex gap-4 items-center">
                <button className="cursor-ponter cursor-pointer hover:text-white hover:bg-orange-600 text-orange-600 font-medium" onClick={()=>setMobileSize(mobileSize == 0 ? 255 : 0)}>
                <i className="ri-menu-3-line text-[23px]"></i>
                </button>
                <div className="flex gap-2">
                    <img src="/images/logo/logo.png" className="cursor-pointer w-[55px]"/>
                    <h1 className="font-bold text-[14px] uppercase text-gray-600 cursor-pointer">UrbanEdge <span className='text-orange-600'><br/>Constructions</span></h1>

                </div>
             </div>
                 
                 <div>

                 </div>
                 
                 <div className="w-[50px] h-[50px] bg-rose-600 rounded-full object-cover relative" onClick={()=>setProfile(!profile)}>
                    <img src="/images/author-2.jpg" className="cursor-pointer w-full h-full rounded-full"/>
                     
                        {
                        profile &&

                       <div className="py-5 shadow-xl bg-white absolute top-14 -left-26">
                       <div className=" flex gap-2 hover:bg-orange-600 hover:text-white text-gray-900 w-full p-2">
                         <i className="ri-user-line"></i>
                          <Link to="">Ravi Kumar</Link>
                       </div>

                       <div className=" flex gap-2 hover:bg-orange-600 hover:text-white text-gray-900 w-full p-2">
                        <i className="ri-mail-ai-line"></i>
                          <Link to="">ravi@gmail.com</Link>
                       </div>

                        <div className="flex gap-2 hover:bg-orange-600 hover:text-white text-gray-900 w-full p-2">
                        <i className="ri-logout-circle-r-line"></i>
                         <button onClick={logout} className="cursor-pointer">Logout</button>
                       </div>
                     </div>
                    }

                
                 </div>

            </div>
            <div className="p-8">
                {children}
            </div>
         
        </div>
     </div>
        
        </>
    )
 }

}



export default Layout;