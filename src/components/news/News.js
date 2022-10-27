import authorImg from '../../assets/blog/author.png';
import blogImg from '../../assets/blog/blog.jpg';

const News = () => {
  return (
    <div className="rounded-lg cursor-pointer shadow">
        <img src={blogImg} alt="" className='rounded-t-lg w-full' />
        <div className='bg-white p-5 space-y-4'>
            <span className='bg-orange-400 text-sm text-white py-1 px-4 rounded-xl'>Design</span>
            <h2 className='text-xl text-gray-800 font-semibold'>Do you really understand the concept of product value?</h2>
            <p className='text-sm text-gray-700'>Do you really understand the concept of product value?Do you really understand the concept of product value?</p>

            <div className='flex items-center gap-7 mt-7'>
                <img src={authorImg} className="w-10 h-10 rounded-full" alt="" />
                <div>
                    <h2 className='text-md font-semibold text-gray-700'>Jhon Doe</h2>
                    <p className='text-sm text-gray-600'>Software Developer</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News;