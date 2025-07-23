import Layout from "./Layout";
import 'swiper/css';
import 'swiper/css/pagination';
import About from "./common/About";
import { Link } from "react-router-dom";
import LatestServices from "./common/LatestServices";
import LatestProjects from "./common/LatestProjects";
import LatestBlogs from "./common/LatestBlogs";
import ShowTestimonials from "./common/ShowTestimonials";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiUrl, fileUrl } from "./hooks/Http";
import { toast } from "react-toastify";

const Home = () => {

    const [HomeBanner, setHomeBanner] = useState({})

    const fetchHomeBanner = async () => {

        try {
            const res = await axios.get(`${apiUrl}/home-banner`)
            setHomeBanner(res.data.data)

        }
        catch (err) {
            toast.error(err.response ? err.response.data.message : err.message)
        }

    }

    useEffect(() => {
        fetchHomeBanner()
    }, [])



    const [WhyChoose, setWhyChoose] = useState([
        {
            title: "Cutting-Edge Solutions",
            image: "/images/icon-1.svg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"
        },

        {
            title: "Cutting-Edge Solutions",
            image: "/images/icon-2.svg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"
        },

        {
            title: "Cutting-Edge Solutions",
            image: "/images/icon-3.svg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non laboriosam unde debitis aspernatur modi fugit earum minus omnis dolor, expedita eum labore libero ullam quibusdam nobis aut officiis perspiciatis!"
        }
    ])



    return (
        <>
            <Layout>
                <section className="banner-section min-h-screen flex items-center justify-center object-cover"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),url('${fileUrl}/uploads/homeBanner/large/${HomeBanner.image}')`,
                        backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'
                    }}>
                    <div className="text-center mx-auto md:w-6/12 flex flex-col gap-2 px-8">
                        <label className="font-semibold md:text-[20px] text-xl text-orange-400">Welcome Amazing Constructions</label>
                        <h1 className="font-bold md:text-7xl text-4xl text-white">{HomeBanner.title}</h1>
                        <div className="text-medium text-white md:text-[18px] text-[16px] md:pt-6 pt-2" dangerouslySetInnerHTML={{ __html: HomeBanner.description }}>

                        </div>

                        <div className="mt-6 flex flex-col gap-8 md:flex-row md:gap-6 mx-auto">
                            <Link to="/contact-us" className="bg-orange-500 px-8 py-3 cursor-pointer text-white font-semibold hover:bg-orange-700">
                                <i className="ri-arrow-right-circle-line mr-2"></i>
                                Contact Now</Link>
                            <Link to="/projects" className="px-8 py-3 cursor-pointer text-white font-semibold border-1 border-white hover:bg-rose-500 hover:border-rose-600">
                                <i className="ri-building-line mr-2"></i>
                                View Projects</Link>
                        </div>
                    </div>
                </section >

                {/* about section */}
                < About />

                {/* latest service */}
                < LatestServices />

                <section className="why-choose my-8">
                    <div className="md:w-10/12 mx-auto px-8 md:px-0">
                        <div className="text-center">
                            <label className="font-medium text-orange-500 text-xl">Why Choose Us</label>
                            <h1 className="font-bold text-3xl text-gray-800 mb-1">Discover our wide variety of projects</h1>
                            <p className="md:text-[18px] text-[16px] text-gray-900">We offer a diverse array of construction services, spanning residential, commercial, and industrial projects</p>

                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mt-8">
                            {
                                WhyChoose.map((item, index) => (
                                    <div className="shadow-lg p-8 h-[300px]" key={index}>
                                        <img src={item.image} className="w-25" />
                                        <h1 className="text-2xl font-semibold mb-2 text-gray-800">{item.title}</h1>
                                        <p className="md:text-[18px] text-[16px] text-gray-900">{item.description}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>


                </section>



                {/* our latest Projects */}
                <LatestProjects />

                {/* testimonials */}
                <ShowTestimonials />

                {/* letest Blogs */}
                <LatestBlogs />


            </Layout >


        </>
    )
}

export default Home;