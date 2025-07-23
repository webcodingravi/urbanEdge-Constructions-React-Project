import { toast } from "react-toastify";
import axios from "axios";
import { apiUrl, fileUrl } from '../hooks/Http';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LatestServices = () => {
  const [services, setServices] = useState([])

  const fetchLatestServices = async () => {
    try {
      const res = await axios.get(`${apiUrl}/get-latest-services?limit=4`)
      setServices(res.data);

    } catch (err) {
      toast.error(err.response ? err.response.data.message : err.message)
    }
  }


  useEffect(() => {
    fetchLatestServices()
  }, [])

  return (
    <>
      <section className="service-section my-8 py-8">
        <div className="md:w-10/12 mx-auto px-8 md:px-0">
          <div className="text-center">
            <label className="font-medium text-orange-500 text-xl">Our Letest Services</label>
            <h1 className="font-bold text-3xl text-gray-800 mb-1">Our Construction Services</h1>
            <p className="md:text-[18px] text-[16px] text-gray-900">We offer a diverse array of construction services, spanning residential, commercial, and industrial projects</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 my-8">
            {
              services && services.map((item, index) => (
                <div className="shadow-lg relative overflow-hidden" key={index}>
                  <div className="relative h-full w-full">
                    <img src={`${fileUrl}/uploads/services/small/${item.image}`} className="cursor-pointer h-full w-full" />
                    <div className="absolute top-0 left-0 h-full w-full" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)" }}></div>
                  </div>

                  <div className="absolute bottom-0 left-0 md:px-4 px-2 my-8 cursor-pointer">
                    <h1 className="font-bold md:text-3xl text-xl text-white md:mb-3">{item.title}</h1>
                    <p className="md:text-[18px] text-[16px] text-white">{item.short_desc}</p>
                    <Link to={`/service/${item.slug}`} className="bg-orange-500 md:px-8 px-2 md:py-3 py-1 cursor-pointer block text-white font-semibold hover:bg-orange-700 md:mt-4 w-fit">
                      <i className="ri-arrow-right-circle-line mr-2"></i>
                      Read More</Link>
                  </div>
                </div>
              ))
            }
          </div>

        </div>
        <div className="text-center mt-15 mb-4">
          <Link to="/services" className="bg-orange-500 px-4 py-3  cursor-pointer text-white font-semibold hover:bg-orange-700 md:mt-4 rounded-lg shadow-lg">
            <i className="ri-arrow-right-circle-line mr-2"></i>
            View All Services</Link>
        </div>
      </section>

    </>
  )

}

export default LatestServices;