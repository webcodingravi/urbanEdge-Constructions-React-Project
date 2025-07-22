import Layout from "./Layout";
import {default as AboutNew} from "./common/About"
import Hero from "./common/Hero";
import Team from "./common/Team";

const About = () => {

 return (
    <>
    <Layout>
    <Hero preHeading="Quality, Integrity Value" heading="About Us" description="We excel at transforming visions into reality through outstanding craftsmanship and precise, We excel at transforming visions into reality through outstanding craftsmanship and precise"/>
    <AboutNew/>

    {/* our team */}
    <Team/>
   
    </Layout>
    
    
    </>
 )
}
export default About;