import portfolioImg from '../../assets/images/porfolio/portfolio1.jpg';

const Portfolio = () => {
  return (
    <div className='relative group cursor-pointer rounded-2xl'>
        <img src={portfolioImg} alt="" className="w-full h-[350px] rounded-2xl" />
        <div className='opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200'>
            <div className='text-start p-3 absolute bottom-0 bg-[#0e0c0c9c] h-full w-full flex items-end rounded-2xl transition-all'>
                <div className='p-4'>
                    <h2 className='text-white text-xl font-semibold font-poppins'>Leafery Branding</h2>
                    <p className='text-sm text-white'>Desig, Web</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Portfolio