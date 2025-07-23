import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { apiUrl, fileUrl } from "../hooks/Http";
const LatestProjects = () => {
  const [projects, setProjects] = useState([])

  const fetchLatestProject = async () => {
    try {
      const res = await axios.get(`${apiUrl}/get-latest-projects?limit=4`)
      setProjects(res.data.data)

    }
    catch (err) {
      toast.error(err.response ? err.response.data.message : err.message)
    }
  }

  useEffect(() => {
    fetchLatestProject()
  }, [])

  return (
    <>
      <section className="project-section bg-gray-100 my-10 py-8">
        <div className="md:w-10/12 mx-auto px-8 md:px-0">
          <div className="text-center">
            <label className="font-medium text-orange-500 text-xl">Our Projects</label>
            <h1 className="font-bold text-3xl text-gray-800 mb-1">Discover our diverse range of projects</h1>
            <p className="md:text-[18px] text-[16px] text-gray-900">We offer a diverse array of construction services, spanning residential, commercial, and industrial projects</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 my-8">
            {
              projects && projects.map((item, index) => (
                <div className="shadow-lg relative overflow-hidden" key={index}>
                  <div className="relative h-full w-full">
                    <img src={`${fileUrl}/uploads/projects/small/${item.image}`} className="cursor-pointer w-full h-full" />
                    <div className="absolute top-0 left-0 h-full w-full" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)" }}></div>
                  </div>

                  <div className="absolute bottom-0 left-0 md:px-4 px-2 md:my-8 hover:bottom-0 cursor-pointer" style={{ transition: "0.5s" }}>

                    <h1 className="font-bold md:text-3xl text-xl text-white md:mb-3">{item.title}</h1>


                    <p className="md:text-[18px] text-[16px] text-white">{item.short_desc}</p>
                    <Link to={`/projects/${item.slug}`} className="bg-orange-500 md:px-8 px-2 md:py-3 py-1 cursor-pointer text-white font-semibold hover:bg-orange-700 md:mt-4 block w-fit">
                      <i className="ri-arrow-right-circle-line mr-2"></i>
                      Read More</Link>
                  </div>
                </div>
              ))
            }
          </div>

        </div>
        <div className="text-center mt-15 mb-4">
          <Link to="/projects" className="bg-orange-500 px-4 py-3  cursor-pointer text-white font-semibold hover:bg-orange-700 md:mt-4 rounded-lg shadow-lg">
            <i className="ri-arrow-right-circle-line mr-2"></i>
            View All Projects</Link>
        </div>
      </section>
    </>
  )
}

export default LatestProjects