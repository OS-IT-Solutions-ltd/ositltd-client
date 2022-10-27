import BannerSlider from "../components/custom/BannerSlider/BannerSlider";
import Wrapper from "../components/layouts/Wrapper";
import Newses from "../components/news/Newses";
import SpecialFeatures from "../components/sections/SpecialFeatures";

const Home = () => {
  return (
    <Wrapper title="OS IT Solutions LTD">
        <>
          <BannerSlider />
          <SpecialFeatures />
          <Newses />
        </>
    </Wrapper>
  )
}

export default Home;