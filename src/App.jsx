import { BrowserRouter, Route,Routes } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
import Home from "./Components/Home"
import About from "./Components/About"
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Blog from "./Components/Blog"
import NotFound from "./NotFound";

const App = () => {
 return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/projects" element={<Projects/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  </BrowserRouter>
  
  </>
 )
}

export default App;