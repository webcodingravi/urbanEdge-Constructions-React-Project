import { useState } from 'react'
import {Link, useLocation} from 'react-router-dom'

const Layout = ({children}) => {
    const location = useLocation();
    
    const [mobileMenu, setMobileMenu] = useState(false)
    const menus = [
        {
        lable: "Home",
        href: "/"
    },
    {
        lable: "About",
        href:"/about"
    },
    {
        lable:"Service",
        href:"/services"
    },

     {
        lable:"Projects",
        href:"/projects"
    },

      {
        lable:"Blogs",
        href:"/blog"
    },

     {
        lable:"Contact Us",
        href:"/contact-us"
    }
]
   return (
    <>
    <header className='bg-white shadow-lg sticky top-0 left-0 z-[999]'>
         <nav className="md:w-10/12 flex items-center justify-between mx-auto px-8 md:px-0">
            <div className='flex gap-1 items-center justify-center'>
                <img src="/images/logo/logo.png" className='w-18 cursor-pointer'/>
                <h1 className="font-bold text-[19px] uppercase text-gray-600">UrbanEdge <span className='text-orange-600'><br/>Constructions</span></h1>
            </div>
            <button className='py-8 md:hidden cursor-pointer text-orange-600' onClick={()=>setMobileMenu(!mobileMenu)}>
                <i className="ri-menu-3-line text-2xl font-semibold"></i>
            </button>
            
            <div className="md:flex text-center hidden">
                    {
                        menus.map((item,index)=>(
                          <Link to={item.href} key={index}  className="py-8 font-medium hover:text-orange-600  w-[100px] text-gray-900"
                           style={{background:(location.pathname === item.href) ? "oklch(96.7% 0.003 264.542)" : '',color:(location.pathname === item.href) ? "oklch(70.5% 0.213 47.604)" : ''}}>{item.lable}</Link>
                        
                        ))
                    }
                    
                </div>

                

                 <aside className='md:hidden h-screen shadow-lg bg-orange-500 fixed top-0 left-0 overflow-hidden' style={{width:mobileMenu ? '280px' : 0, transition:'0.5s'}}>
                    <div className='flex flex-col text-white gap-2'>
                        {
                            menus.map((item,index)=>(
                                <Link to={item.href} key={index} className='py-3 px-6 hover:bg-rose-400 font-medium'>{item.lable}</Link>
                            ))
                        }
                    </div>
                </aside>
             
             
         </nav>
    </header>
    <main>
        {children}
    </main>

    <footer className='bg-gray-800 pt-8 pb-4'>
      <div className='grid md:grid-cols-4 md:w-10/12 mx-auto gap-3 px-8'>
       <div className='text-gray-300'>
        <div className='flex items-center gap-2 mb-3'>
        <img src="/images/logo/logo.png" className='w-18 cursor-pointer'/>
        <h1 className='font-bold text-xl uppercase'>UrbanEdge <span className='text-orange-500'><br/>Constructions</span></h1>
        </div>
        <p className='md:text-[18px] text-[16px]'>Our post-construction services gives you peace of mind showing that we are still have for you event after</p>
      </div>

      <div>
        <h1 className='font-semibold text-xl text-orange-500 mb-6 uppercase mt-6 md:mt-0'>Our Services</h1>
        <ul className='flex flex-col gap-2 md:text-[18px] text-[16px] text-gray-300'>
            <li>
                <i className="ri-arrow-right-circle-fill mr-2"></i>
                <a href="">Specialty Contstruction</a>
            </li>
            <li>
                <i className="ri-arrow-right-circle-fill mr-2"></i>
                <a href="">Specialty Contstruction</a>
            </li>
            <li>
                <i className="ri-arrow-right-circle-fill mr-2"></i>
                <a href="">Specialty Contstruction</a>
            </li>
            <li>
                <i className="ri-arrow-right-circle-fill mr-2"></i>
                <a href="">Specialty Contstruction</a>
            </li>
        </ul>
      </div>

      <div>
        <h1 className='font-semibold text-xl text-orange-500 uppercase my-6 md:mt-0'>Quick Links</h1>
         <ul className='md:text-[18px] text-[16px] text-gray-300'>
            <li className='flex flex-col gap-2'>
                {
                    menus.map((item,index)=>(
                        <Link to={item.href} key={index}>
                        <i className="ri-arrow-right-circle-fill mr-2"></i>
                        {item.lable}</Link>
                      
                    ))
                }
            </li>
         </ul>
      </div>

      <div>
        <h1 className='font-semibold text-xl text-orange-500 uppercase my-6 md:mt-0'>Contact Us</h1>
        <ul className='flex flex-col gap-3 md:text-[18px] text-[16px] text-gray-300'>
            <li className='flex gap-1'>
                <i className="ri-phone-fill mr-2"></i>
                <a href="tel:+91-9856785246">+91-9856785246</a>
            </li>
            <li className='flex gap-1'>
                <i className="ri-mail-ai-line mr-2"></i>
                <a href="info@example.com">info@example.com</a>
            </li>
            <li className='flex gap-1'>
                <i className="ri-map-pin-2-line mr-2"></i>
                123 Main Street, Anytown, <br/> AnyState 12345, USA
            </li>
         
        </ul>
      </div>

     
      </div>

        <div className='md:w-10/12 mx-auto px-8'>
        <h1 className='text-center mt-15 text-gray-300 md:text-[17px] text-[16px]'>Copyright© {new Date().getFullYear()} <Link to="/" className='text-orange-500'>Urbanedge Constructions.</Link> All Rights</h1>
      </div>
    
    </footer>
   
    
    </>
   )
} 

export default Layout;