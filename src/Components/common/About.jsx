const About = () => {
 return (
    <>
     <section className="about-section my-16">
        <div className="md:w-10/12 grid md:grid-cols-2 md:gap-8 gap-2 mx-auto px-8 md:px-0">
            <div className="cursor-ponter rounded-lg mb-2 md:mb-0">
                 <img src="./images/about-us.jpg" className="cursor-pointer rounded-lg object-cover"/>
            </div>
            <div>
               <label className="font-semibold text-orange-600 text-xl uppercase">About Us</label>
               <h1 className="font-bold my-1 md:text-[38px] text-[28px] text-gray-800">Crafting structures that last a lifetime</h1>
               <p className="text-semibold md:text-[18px] text-[16px] text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolorem quae placeat dolore? Debitis asperiores in laboriosam commodi architecto, labore repellendus eaque deserunt laudantium tempora! Ratione amet accusantium quae non.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolorem quae placeat dolore? Debitis asperiores in laboriosam commodi architecto, labore repellendus eaque deserunt laudantium tempora! Ratione amet accusantium quae non.

                       <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolorem quae placeat dolore? Debitis asperiores in laboriosam commodi architecto, labore repellendus eaque deserunt laudantium tempora! Ratione amet accusantium quae non.

                       <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolorem quae placeat dolore? Debitis asperiores in laboriosam commodi architecto, labore repellendus eaque deserunt laudantium tempora! Ratione amet accusantium quae non.
               </p>
            </div>
        </div>
     </section>
    </>
 )
}

export default About;