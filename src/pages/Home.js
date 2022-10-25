import BannerSlider from "../components/custom/BannerSlider/BannerSlider";
import Wrapper from "../components/layouts/Wrapper";
import SpecialFeatures from "../components/sections/SpecialFeatures";

const Home = () => {
  return (
    <Wrapper title="OS IT Solutions LTD">
        <>
          <BannerSlider />
          <SpecialFeatures />
        </>
    </Wrapper>
  )
}

export default Home;