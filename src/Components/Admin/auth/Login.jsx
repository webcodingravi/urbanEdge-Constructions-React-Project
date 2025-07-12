import { useState,useContext } from "react"
import { useForm} from "react-hook-form"
import axios from "axios";
 import { toast } from 'react-toastify';
 import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Auth";
import {apiUrl} from "../../hooks/Http"

const Login = () => {
const {login} = useContext(AuthContext);
const navigate = useNavigate();
const [loader,setLoader] = useState(null);
 const [passwordToggle, setPasswordToggle] = useState('password');

  
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
     setLoader(true)
    try{
          const res = await axios.post(`${apiUrl}/authenticate`,data,{
            headers: {'Content-Type': 'application/json'}
        })

        if(res.data.status == false) {
            toast.error(res.data.message)

        }else{
            const userInfo = {
                id: res.data.id,
                token:res.data.token
            }
            localStorage.setItem("userInfo",JSON.stringify(userInfo))

            login(userInfo);
            navigate("/admin/dashboard");
            
            
        }
     
    
    }catch(err) {
     toast.error(err.response ? err.response.data.message : err.message)
    }
    finally{
        setLoader(false)
    }
  }

 return (
    <>
    <div className="md:min-h-screen py-10">
            <div className="md:w-10/12 mx-auto md:grid md:grid-cols-2 gap-8 items-center px-8 md:px-0">
              <img src="/images/auth/login.jpg" className="" alt="" />

            <div>
                <h1 className="font-bold md:text-5xl text-4xl">Login!</h1>
                <form className="flex flex-col md:gap-8 gap-4 md:mt-9 mt-7" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-600 font-medium">Email*</label>
                        <input {
                            ...register('email',{
                                required: "This field is required"
                            })
                        }
                        type="email" className={`border border-gray-200 p-2.5 focus:outline-none rounded ${errors.email && 'invalid:border border-pink-500'}`} placeholder="Enter email"/>
                        {
                            errors.email && <p className="text-rose-600">{errors.email ?.message}</p>
                        }
                    </div>

                    <div className="flex flex-col gap-1 relative">
                        <label className="text-gray-600 font-medium">Password*</label>
                        <input {
                            ...register('password',{
                                required: "This field is required"
                            })
                        } type={passwordToggle} className={`border border-gray-200 p-2.5 focus:outline-none rounded ${errors.password && 'invalid:border border-pink-500'}`} placeholder="Enter password"/>
                        {
                            errors.password && <p className="text-rose-600">{errors.password ?.message}</p>
                        }
                        <button type="button" onClick={()=>setPasswordToggle(passwordToggle === 'password' ? 'text' : 'password')} className="cursor-pointer absolute top-9 right-4 bg-gray-100 p-[4px] hover:text-rose-600 rounded-full">
                            {

                                passwordToggle === 'password' ? 

                               <i className="ri-eye-line"></i>
                                :
                                
                                 <i className="ri-eye-off-line"></i>
                            }
                            
                        </button>
                        
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
                        <button className="bg-rose-500 px-5 py-3 w-fit text-white cursor-pointer hover:bg-orange-500">
                        <i className="ri-login-circle-line mr-2"></i>
                        Login</button>

                    }

                    

                </form>

            </div>
            </div>
        </div>
    
    </>
 )

}

export default Login;