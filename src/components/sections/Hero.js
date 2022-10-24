import { BiRightArrowAlt } from 'react-icons/bi';
import bannerImg from '../../assets/images/banner-1.png';

const Hero = ({ title }) => {
  return (
    <div className="bg-gradient-to-r from-[#684EFB]  to-[#5A00DD] py-6 px-6 lg:px-0">
        <div className="container">
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-between items-center">
                <div className='space-y-5'>
                    <h2 className='text-3xl font-semibold font-poppins text-gray-50 uppercase'>{title}</h2>
                    <p className='text-base font-semibold font-poppins text-gray-50'>OS IT Solutions Ltd is one of the most prominent & dynamic ITes (IT-enabled Service)
                          companies in the ICT industry of Bangladesh.</p>
                      <button className='bg-[#e55353] text-gray-50 font-poppins pl-7 pr-2 py-1 rounded-[25px] flex items-center gap-4 group'>
                          Get Started 
                          <span className='bg-white rounded-full p-2 group-hover:bg-black transition'>
                              <BiRightArrowAlt className='text-gray-700 text-2xl group-hover:animate-pulse group-hover:text-gray-100' />
                          </span>
                      </button>
                    
                </div>
                <div>
                    <img src={bannerImg} alt="" className='ml-auto' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;