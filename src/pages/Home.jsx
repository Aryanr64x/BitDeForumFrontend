import { Link, useNavigate } from "react-router-dom";
import AOS from 'aos';
import { useEffect } from "react";
import "aos/dist/aos.css";



const Home = () => {
  const nav = useNavigate()
  useEffect(()=>{
    AOS.init({
      duration: 500
    })
  }, [])
  return (
    <div>
      <div className="min-h-screen bg-primary grid grid-cols-3 px-4 sm:px-12 md:px-24 lg:px-32 hero">
        <div className="flex flex-col justify-center text-white col-span-3 md:col-span-2">
          <div className="text-xl text-white">
            Welcome to
          </div>
          <div className="text-6xl lg:text-8xl font-french" data-aos="fade-right">
            FORUM DE BIT
          </div>
          <div className="font-light text-xl mt-2" data-aos="fade-right" data-aos-delay="200">
              The platform where BIT students gather around , raise topics 
              of their interest and draw meaningful conclusions
          </div>

          <div className="mt-10">
            <button onClick={()=>{nav('/auth')}} className="px-6 py-4 text-lg font-semibold rounded-full bg-secondary hover:scale-105 transition-all duration-200" >
              Lets Get Started !
            </button>

          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )


}


export default Home;