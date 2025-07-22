import { useEffect, useState } from "react";
import Layout from "../Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { apiUrl, token } from "../../hooks/Http";
import { Link } from "react-router-dom";
import PaginationControls from "../../common/PaginationControls"


const List = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [query, setQuery] = useState('');
    const [pagination, setPagination] = useState({});
    const [page, setPage] = useState(1);
    const perPage = 10;

    const fetchTestimonials = async (page = 1) => {
        try {
            const res = await axios.get(`${apiUrl}/testimonials?query=${query}&page=${page}&limit=${perPage}`, {
                headers: {
                    Authorization: `Bearer ${token()}`
                }
            })
            setTestimonials(res.data.data.data)
            setPagination(res.data.data)


        }
        catch (err) {
            toast.error(err.response ? err.response.data.message : err.message)
        }

    }


    useEffect(() => {
        fetchTestimonials(page);
    }, [page, query])

    const deleteTestimonial = async (id) => {
        if (confirm("Are you sure you want to delete?")) {
            try {
                const res = await axios.delete(`${apiUrl}/testimonials/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token()}`
                    }
                })
                if (res.data.status == true) {
                    const newTestimonals = testimonials.filter(testimonials => testimonials.id != id)
                    setTestimonials(newTestimonals)
                    toast.success(res.data.message)
                } else {
                    toast.error(res.data.message)
                }
            }
            catch (err) {
                toast.error(err.response ? err.response.data.message : err.message)
            }
        }
    }

    return (
        <>
            <Layout>
                <div className="md:flex items-center justify-between mt-10 bg-white p-7 rounded-lg">

                    <h1 className="font-bold text-2xl mb-3 md:mb-0">
                        Testimonials
                    </h1>

                    <div className="flex md:flex-row flex-col gap-3">
                        <input type="search" value={query} className="px-4 py-2.5 border border-gray-200 md:w-[300px]  focus:outline-none rounded" placeholder="search" onChange={(e) => setQuery(e.target.value)} />
                        <Link to="/admin/testimonial/create" className="bg-orange-500 px-7 py-3 rounded text-white text-semibold shadow-lg hover:bg-orange-600">
                            <i className="ri-file-add-line mr-2"></i>
                            Add Testimonial</Link>
                    </div>

                </div>

                <div className="mt-8 overflow-auto">

                    <table className="w-full">
                        <thead className="bg-slate-600 text-white">
                            <tr>
                                <th className="px-8 py-5 text-start">Testimonial</th>
                                <th className="px-8 py-5 text-start">Citation</th>
                                <th className="px-8 py-5 text-start">Designation</th>
                                <th className="px-8 py-5 text-start">Status</th>
                                <th className="px-8 py-5 text-start">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {testimonials && testimonials.map((item, index) => (
                                <tr className={`${index % 2 == 0 ? 'bg-gray-200' : 'bg-white'}`} key={index}>
                                    <td className="px-8 py-5">{item.testimonial}</td>
                                    <td className="px-8 py-5">{item.citation}</td>
                                    <td className="px-8 py-5">{item.designation}</td>
                                    <td className="px-8 py-5">
                                        {
                                            item.status == 1 ?
                                                <span className="bg-green-600 text-green-100 p-1 rounded">Active</span>
                                                :
                                                <span className="bg-rose-600 text-rose-100 p-1 rounded">Deactive</span>
                                        }
                                    </td>
                                    <td className="px-8 py-5 flex gap-2">
                                        <Link to={`/admin/testimonial/edit/${item.id}`} className="bg-green-500 w-[30px] h-[30px] rounded-full cursor-pointer text-white hover:bg-green-600 flex items-center justify-center">
                                            <i className="ri-edit-circle-fill"></i></Link>
                                        <button onClick={() => deleteTestimonial(item.id)} className="bg-rose-500 w-[30px] h-[30px] rounded-full cursor-pointer text-white hover:bg-rose-600">
                                            <i className="ri-delete-bin-6-line">
                                            </i>
                                        </button>
                                    </td>
                                </tr>

                            ))
                            }

                        </tbody>
                    </table>
                    <PaginationControls pagination={pagination} onPageChange={setPage} />

                </div>

            </Layout>

        </>
    )
}

export default List;