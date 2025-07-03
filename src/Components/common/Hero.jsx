const Hero = ({preHeading,heading,description}) => {
 return (
    <>
        <div className="py-30" style={{backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),url('/images/hero.jpg')",backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
       <div className="md:w-10/12 mx-auto px-8">
        <div className="text-white md:w-6/12">
         <label className="text-medium text-xl text-orange-400">{preHeading}</label>
         <h1 className="font-bold text-6xl">{heading}</h1>
         <p className="text-medium md:text-[18px] text-[16px] md:pt-4 pt-2">{description}</p>
        </div>
       </div>
    </div>

    </>
 )
}
export default Hero;