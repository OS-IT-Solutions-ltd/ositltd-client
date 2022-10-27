import Portfolio from "./Portfolio"

const Portfolios = () => {
  return (
    <div className="container lg:py-36 py-14 lg:pb-20 px-6 lg:px-0">
        <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 capitalize">Our Portfolio</h2>
            <p className="text-base text-gray-600 lg:w-1/2 w-full m-auto">Credibly grow premier ideas rather than bricks-and-clicks strategic theme areas distributed for stand-alone web-readiness.</p>

            {/* Filters */}
            <div className="space-x-4 mt-7">
                <button className="text-gray-700 font-semibold text-[17px] border-b-2 border-blue-500 hover:border-b hover:bg-blue-500">All</button>
                  <button className="text-gray-700 font-semibold text-[17px] hover:border-b-2 hover:border-blue-500">Web Development</button>
                  <button className="text-gray-700 font-semibold text-[17px] hover:border-b-2 hover:border-blue-500">App Development</button>
            </div>  


            {/* Portfolio items */}
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-16">
                <Portfolio />
                <Portfolio />
                <Portfolio />
                <Portfolio />
                <Portfolio />
                <Portfolio />
            </div>
        </div>
    </div>
  )
}

export default Portfolios