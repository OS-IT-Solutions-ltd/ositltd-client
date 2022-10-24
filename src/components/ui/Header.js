import { Link } from "react-router-dom";

const Header = () => {
  return (
      <div className="bg-gradient-to-r from-[#684EFB]  to-[#5A00DD] py-6 px-6 lg:px-0">
        <div className="container">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold font-poppins text-gray-50">OSIT</h2>
                </div>
                <div className="lg:block hidden space-x-8 text-gray-50 font-poppins">
                    <Link to='/' className="font-semibold">Home</Link>
                    <Link to='/company'>Company</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='/portfolio'>Solution & Products</Link>
                    <Link to='/portfolio'>News</Link>
                    <Link to='/portfolio'>Contact Us</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;