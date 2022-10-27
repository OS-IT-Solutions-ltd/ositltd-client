import { Link } from "react-router-dom"
import News from "./News"

const Newses = () => {
  return (
    <div className="bg-gray-50">
      <div className="container lg:py-36 py-14 lg:pb-20 px-6 lg:px-0">
        <h5 className="text-[#6763E9] uppercase font-semibold">news</h5>
        <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-6">
          <h2 className="col-span-4 text-3xl font-semibold text-gray-800 capitalize">Check our latest news and update</h2>
          <div className="col-span-8 lg:ml-auto">
            <Link to="/" className="bg-[#6763E9] text-white text-sm py-3 px-8 rounded font-semibold">View all news</Link>
          </div>
        </div>

        {/* News Sections */}
        <div className="mt-14 grid lg:grid-cols-3 grid-cols-1 gap-4">
          <News />
          <News />
          <News />
        </div>
      </div>
    </div>
  )
}

export default Newses