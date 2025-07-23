import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
import Home from "./Components/Home"
import About from "./Components/About"
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Blog from "./Components/Blog"
import NotFound from "./NotFound";
import Contact from "./Components/Contact";
import Login from "./Components/Admin/auth/Login";
import { ToastContainer } from 'react-toastify';
import Dashboard from "./Components/Admin/Dashboard";
import RequireAuth from "./Components/util/RequreAuth";
import GuestAuth from "./Components/util/Guest.jsx";
import { AuthProvider } from './Components/Admin/Context/Auth.jsx'
import { default as ServiceList } from "./Components/Admin/Services/List.jsx";
import { default as ServiceCreate } from "./Components/Admin/Services/Create.jsx";
import { default as ServiceEdit } from "./Components/Admin/Services/Edit.jsx";
import { default as ProjectList } from "./Components/Admin/Projects/List.jsx"
import { default as ProjectCreate } from "./Components/Admin/Projects/Create.jsx"
import { default as ProjectEdit } from "./Components/Admin/Projects/Edit.jsx"
import { default as ArticleList } from "./Components/Admin/Articles/List.jsx"
import { default as ArticleCreate } from "./Components/Admin/Articles/Create.jsx"
import { default as ArticleEdit } from "./Components/Admin/Articles/Edit.jsx"
import { default as TestimonialList } from "./Components/Admin/Testimonials/List.jsx"
import { default as TestimonialCreate } from "./Components/Admin/Testimonials/Create.jsx"
import { default as TestimonialEdit } from "./Components/Admin/Testimonials/Edit.jsx"
import { default as MemberList } from "./Components/Admin/Members/List.jsx"
import { default as MemberCreate } from "./Components/Admin/Members/Create.jsx"
import { default as MemberEdit } from "./Components/Admin/Members/Edit.jsx"
import { default as AboutEdit } from "./Components/Admin/About.jsx"
import { default as HomeBanner } from "./Components/Admin/HomeBanner.jsx"
import ServiceDetails from "./Components/ServiceDetails.jsx";
import ProjectDetails from "./Components/ProjectDetails.jsx";
import BlogDetails from "./Components/BlogDetails.jsx";
import ForgotPassword from "./Components/Admin/auth/ForgotPassword.jsx";
import ResetPassword from "./Components/Admin/auth/ResetPassword.jsx";
import Register from "./Components/Admin/auth/Register.jsx";



const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<GuestAuth><Home /></GuestAuth>} />
            <Route path="/about" element={<GuestAuth><About /></GuestAuth>} />
            <Route path="/services" element={<GuestAuth><Services /> </GuestAuth>} />
            <Route path="/projects" element={<GuestAuth><Projects /> </GuestAuth>} />
            <Route path="/blog" element={<GuestAuth><Blog /> </GuestAuth>} />
            <Route path="/contact-us" element={<GuestAuth><Contact /> </GuestAuth>} />
            <Route path="/service/:slug" element={<GuestAuth><ServiceDetails /> </GuestAuth>} />
            <Route path="/project/:slug" element={<GuestAuth><ProjectDetails /> </GuestAuth>} />
            <Route path="/blog/:slug" element={<GuestAuth><BlogDetails /> </GuestAuth>} />

            <Route path="/admin">
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="reset-password/:token" element={<ResetPassword />} />
              <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />

              {/* Service route */}
              <Route path="service/list" element={<RequireAuth><ServiceList /></RequireAuth>} />
              <Route path="service/create" element={<RequireAuth><ServiceCreate /></RequireAuth>} />
              <Route path="service/edit/:id" element={<RequireAuth><ServiceEdit /></RequireAuth>} />

              {/* Project route */}
              <Route path="project/list" element={<RequireAuth><ProjectList /></RequireAuth>} />
              <Route path="project/create" element={<RequireAuth><ProjectCreate /></RequireAuth>} />
              <Route path="project/edit/:id" element={<RequireAuth><ProjectEdit /></RequireAuth>} />

              {/* Article route */}
              <Route path="article/list" element={<RequireAuth><ArticleList /></RequireAuth>} />
              <Route path="article/create" element={<RequireAuth><ArticleCreate /></RequireAuth>} />
              <Route path="article/edit/:id" element={<RequireAuth><ArticleEdit /></RequireAuth>} />

              {/* Testimonial route */}
              <Route path="testimonial/list" element={<RequireAuth><TestimonialList /></RequireAuth>} />
              <Route path="testimonial/create" element={<RequireAuth><TestimonialCreate /></RequireAuth>} />
              <Route path="testimonial/edit/:id" element={<RequireAuth><TestimonialEdit /></RequireAuth>} />

              {/* Member route */}
              <Route path="member/list" element={<RequireAuth><MemberList /></RequireAuth>} />
              <Route path="member/create" element={<RequireAuth><MemberCreate /></RequireAuth>} />
              <Route path="member/edit/:id" element={<RequireAuth><MemberEdit /></RequireAuth>} />

              {/* About route */}
              <Route path="about/:id" element={<RequireAuth><AboutEdit /></RequireAuth>} />
              {/* HomeBanner route */}
              <Route path="home-banner/:id" element={<RequireAuth><HomeBanner /></RequireAuth>} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </AuthProvider>

    </>
  )
}

export default App;