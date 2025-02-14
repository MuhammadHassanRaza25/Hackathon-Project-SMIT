import { Link } from "react-router-dom";
import herosectionimage from "../assets/Images/herosectionimage.jpg"

function HeroSection(){

    return(
        <>
        <section className="lg:px-16 bg-white text-gray-600 body-font">
         <div className="contentDiv lg:pt-36 lg:pb-36 pb-24 pt-28 mx-auto flex md:flex-row flex-col items-center">
              
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0" data-aos="fade-up">
                 <h1 className="title-font text-green-500 lg:text-3xl text-2xl mb-3 font-bold">
                    Saylani Welfare International Trust
                 </h1>
                 <p className="text-gray-700 lg:text-lg text-base mb-5 mt-1 leading-relaxed">
                    <span className="font-semibold">Saylani Welfare International Trust</span> provides installment-based loans and free IT education to uplift the underprivileged, enabling them to build better futures. By offering these resources, the trust empowers individuals to improve their financial stability and gain valuable skills in today’s technology-driven world, creating opportunities for long-term growth and self-reliance
                 </p>
                  <div className="flex lg:justify-center justify-start gap-3">
                      <Link to={'/user'}>
                         <button className="inline-flex cursor-pointer text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white px-8 py-2 rounded-md">Apply For Loan</button>
                       </Link>
                  </div>
              </div>

              <div className="lg:w-[36vw] md:w-1/2 w-[75vw]">
                 <img
                   className="object-cover object-center rounded-md"
                   alt="hero image"
                   src={herosectionimage}
                 />
              </div>

           </div>
       </section>
        </>
    )
}

export default HeroSection;