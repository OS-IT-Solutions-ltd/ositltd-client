import { BsFillEmojiHeartEyesFill } from 'react-icons/bs';
import { FaCommentDots, FaShieldAlt } from 'react-icons/fa';

const SpecialFeatures = () => {
  return (
    <div className="container py-36 px-6 lg:px-0">
        
        <div className="text-center">
              <h4 className="text-[24px] font-[600] text-[#175cff] font-poppins">Build Quality</h4>
              <h2 className="text-[40px] font-[700] text-[#0b163f] font-poppins">Our Special Features</h2>
              <p className="lg:w-1/2 m-auto font-poppins">Authoritatively underwhelm excellent methodologies via premium expertise competitive than open-source imperatives disseminate.</p>

              <div className='grid lg:grid-cols-3 grid-cols-1 gap-7 mt-20'>
                  <div className="text-center shadow-xl rounded-lg px-10 py-14 space-y-3 hover:shadow-2xl transition-shadow duration-200">
                    <div className='bg-[#D1DEFF] w-[65px] h-[65px] rounded-full flex items-center justify-center m-auto mb-6'>
                        <FaShieldAlt className='m-auto text-2xl text-blue-700' />
                    </div>
                    <h3 className='text-[20px] font-[600] text-gray-800 font-poppins'>Quality First</h3>
                    <p className='text-base text-gray-600 font-poppins'>Professionally integrate high standards applications before user friendly leadership skills.</p>
                </div>
                  <div className="text-center shadow-xl rounded-lg px-10 py-14 space-y-3 hover:shadow-2xl transition-shadow duration-200">
                      <div className='bg-[#FCDDE1] w-[65px] h-[65px] rounded-full flex items-center justify-center m-auto mb-6'>
                          <FaCommentDots className='m-auto text-2xl text-[#eb7381]' />
                      </div>
                      <h3 className='text-[20px] font-[600] text-gray-800 font-poppins'>Communication</h3>
                      <p className='text-base text-gray-600 font-poppins'>Professionally integrate high standards applications before user friendly leadership skills.</p>
                  </div>
                  <div className="text-center shadow-xl rounded-lg px-10 py-14 space-y-3 hover:shadow-2xl transition-shadow duration-200">
                      <div className='bg-[#DEF4ED] w-[65px] h-[65px] rounded-full flex items-center justify-center m-auto mb-6'>
                          <BsFillEmojiHeartEyesFill className='m-auto text-2xl text-[#3bbe95]' />
                      </div>
                      <h3 className='text-[20px] font-[600] text-gray-800 font-poppins'>Reliability</h3>
                      <p className='text-base text-gray-600 font-poppins'>Professionally integrate high standards applications before user friendly leadership skills.</p>
                  </div>
              </div>
        </div>

    </div>
  )
}

export default SpecialFeatures