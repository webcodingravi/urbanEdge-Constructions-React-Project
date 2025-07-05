import { BrowserRouter, Route,Routes } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
import Home from "./Components/Home"
import About from "./Components/About"
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Blog from "./Components/Blog"
import NotFound from "./NotFound";
import Contact from "./Components/Contact";
import Login from "./Components/Admin/auth/Login";
  import { ToastContainer} from 'react-toastify';
import Dashboard from "./Components/Admin/Dashboard";
import RequireAuth from "./Components/common/RequreAuth";
import { AuthProvider } from './Components/Admin/Context/Auth.jsx'


const App = () => {
 return (
  <>
   <AuthProvider>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/projects" element={<Projects/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/contact-us" element={<Contact/>} />
    <Route path="*" element={<NotFound/>}/>
   
    <Route path="/admin">
     <Route path="login" element={<Login/>} />
      <Route path="dashboard" element={
        <RequireAuth>
        <Dashboard/>
      </RequireAuth>
        } />

    </Route>
  </Routes>
  </BrowserRouter>
  <ToastContainer />
  </AuthProvider>
  
  </>
 )
}

export default App;