import axios from "axios";
import { useEffect, useState } from "react";
import { apiUrl, fileUrl } from "../hooks/Http";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const LatestBlogs = () => {
    const [blog, setBlog] = useState([])

    const fetchArticles = async () => {

        try {
            const res = await axios.get(`${apiUrl}/get-latest-articles?limit=4`)
            setBlog(res.data.data)

        }
        catch (err) {
            toast.error(err.response ? err.response.data.message : err.message)
        }

    }

    useEffect(() => {
        fetchArticles()
    }, [])



    return (
        <>
            <section className="blog-post my-15">
                <div className="md:w-10/12 mx-auto px-8 md:px-0">
                    <div className="text-center">
                        <label className="font-medium text-orange-500 text-xl">Blog & News</label>
                        <h1 className="font-bold text-3xl text-gray-800 mb-1">Articles & Blog Posts</h1>
                        <p className="md:text-[18px] text-[16px] text-gray-900">We offer a diverse array of construction services, spanning residential, commercial, and industrial projects</p>

                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-8">
                        {
                            blog.map((item, index) => (
                                <div className="shadow-lg" key={index}>
                                    <Link to={`/blog/${item.slug}`}>

                                        <img src={`${fileUrl}/uploads/articles/small/${item.image}`} className="cursor-pointer w-full" />
                                    </Link>
                                    <div className="p-5">
                                        <div className="flex md:justify-between md:flex-row flex-col md:items-center">
                                            <Link to={`/blog/${item.slug}`} className="text-xl font-bold text-gray-900 hover:text-orange-500">
                                                {item.title}
                                            </Link>
                                            {/* <div className="flex gap-4 md:mt-0 mt-1 font-medium text-gray-600">
                        <div>
                         <i className="ri-user-line mr-2"></i>
                        <a href="#" className="hover:text-orange-500">{item.author}</a>
                        </div>
                        
                        <div>
                            <i className="ri-calendar-2-line mr-2"></i>
                        <label>{item.created_at}</label>
                        </div>
                    </div> */}
                                        </div>

                                        <div className="md:text-[18px] text-[16px] text-gray-800 mt-2" dangerouslySetInnerHTML={{ __html: item.content.slice(0, 20) }}></div>

                                        <Link to={`/blog/${item.slug}`} className="bg-orange-500 px-8 py-3 block w-fit cursor-pointer text-white font-semibold hover:bg-orange-700 md:mt-4">
                                            <i className="ri-arrow-right-circle-line mr-2"></i>
                                            Read More</Link>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                    <div className="text-center my-12">
                        <Link to="/blog" className="bg-orange-500 px-4 py-3  cursor-pointer text-white font-semibold hover:bg-orange-700 md:mt-4 rounded-lg shadow-lg">
                            <i className="ri-arrow-right-circle-line mr-2"></i>
                            View All Posts</Link>
                    </div>
                </div>

            </section>

        </>
    )
}

export default LatestBlogs;