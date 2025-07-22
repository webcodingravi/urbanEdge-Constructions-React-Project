import { useForm } from "react-hook-form"
import Layout from "./Layout"
import Hero from "./common/Hero"
import { toast } from "react-toastify";
import axios from "axios";
import { apiUrl } from "./hooks/Http";

const Contact = () => {

   const { register, reset, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = async (data) => {
      try {
         const res = await axios.post(`${apiUrl}/contact-now`, data)
         if (res.data.status == true) {
            toast.success(res.data.message);
            reset();
         }
      }
      catch (err) {
         toast.error(err.response ? err.response.data.message : err.message)
      }

   }
   return (
      <>
         <Layout>
            <Hero preHeading="Quality, Integrity Value" heading="Contact Us" description="We excel at transforming visions into reality through outstanding craftsmanship and precise, We excel at transforming visions into reality through outstanding craftsmanship and precise" />

            <section className="contact-us my-15">
               <div className="md:w-10/12 mx-auto px-8 md:px-0">
                  <div className="text-center">
                     <h1 className="font-bold text-3xl text-gray-800 mb-1">Contact Us</h1>
                     <p className="md:text-[18px] text-[16px] text-gray-900">We offer a diverse array of construction services, spanning residential, commercial, and industrial projects</p>

                  </div>

                  <div className="md:flex gap-8 my-10">
                     <div className="shadow-lg p-8 flex flex-col gap-4 md:w-[400px]">
                        <div className="flex flex-col">
                           <h2 className="font-semibold text-xl text-gray-800"><i class="ri-cellphone-line mr-1"></i> Call Us</h2>
                           <label className="text-gray-600 block">+91-5878964532</label>
                           <label className="text-gray-600 block">+91-8745221233</label>
                        </div>

                        <div>
                           <h2 className="font-semibold text-xl text-gray-800"><i class="ri-mail-ai-line mr-1"></i>You can write us</h2>
                           <label className="text-gray-600 block">info@example.com</label>
                           <label className="text-gray-600 block">example@example.com</label>
                        </div>

                        <div>
                           <h2 className="font-semibold text-xl text-gray-800"><i className="ri-map-pin-2-line mr-1"></i>Address</h2>
                           <address className=" text-gray-600">123 Main Street, Anytown, <br /> AnyState 12345, USA</address>
                        </div>

                     </div>
                     <div className="shadow-lg p-8 flex-1">
                        <form className="md:grid md:grid-cols-2 gap-8" onSubmit={handleSubmit(onSubmit)}>
                           <div className="flex flex-col gap-2">
                              <label className="text-gray-600 font-semibold">Name*</label>
                              <input {...register('name', { required: 'The name field is required' })} type="text" name="name" className={`p-2.5 border border-gray-200 focus:outline-none rounded ${errors.name && 'invalid:border border-pink-500'}`} placeholder="Enter Your Name" />
                              {
                                 errors.name && <p className="text-rose-600">{errors.name?.message}</p>
                              }
                           </div>
                           <div className="flex flex-col gap-2">
                              <label className="text-gray-600 font-semibold">Email*</label>
                              <input {...register('email', {
                                 required: 'The email field is required',
                                 pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
                                    message: 'Invalid email address',
                                 },
                              })}
                                 type="email" name="email" className={`p-2.5 border border-gray-200 focus:outline-none rounded ${errors.email && 'invalid:border border-pink-500'}`} placeholder="Enter Your Email" />
                              {
                                 errors.email && <p className="text-rose-600">{errors.email?.message}</p>
                              }
                           </div>

                           <div className="flex flex-col gap-2">
                              <label className="text-gray-600 font-semibold">Phone*</label>
                              <input {...register('phone', { required: 'The phone field is required' })} type="number" name="phone" className="p-2.5 border border-gray-200 focus:outline-none rounded" placeholder="Enter Your Phone" required />
                           </div>

                           <div className="flex flex-col gap-2">
                              <label className="text-gray-600 font-semibold">Subject</label>
                              <input {...register('subject')} type="text" name="subject" className="p-2.5 border border-gray-200 focus:outline-none rounded" placeholder="Enter Your subject" />
                           </div>

                           <div className="flex flex-col gap-2 col-span-2">
                              <label className="text-gray-600 font-semibold">Message</label>
                              <textarea
                                 {...register('message')}
                                 rows={10} name="message" className="p-2.5 border border-gray-200 focus:outline-none rounded" placeholder="Message" />
                           </div>

                           <button className="bg-orange-500 px-8 py-3 cursor-pointer text-white font-semibold hover:bg-orange-700 w-fit">
                              <i class="ri-mail-ai-line mr-2"></i>
                              Submit</button>

                        </form>
                     </div>
                  </div>
               </div>
            </section>
         </Layout>
      </>
   )

}
export default Contact