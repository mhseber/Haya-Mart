
import AboutUs from "./Or-Components/Home/AboutUs";
import Banner from "./Or-Components/Home/Banner";
import BestSelling from "./Or-Components/Home/BestSelling";
import NewArrival from "./Or-Components/Home/NewArrival";
import ShopByCategory from "./Or-Components/Home/ShopByCategory";
import SignatureEdition from "./Or-Components/Home/SignatureEdition";
import SONewsletter from "./Or-Components/Home/SONewsletter";
import Testimonials from "./Or-Components/Home/Testimonials";
import TrustedCards from "./Or-Components/Home/TrustedCards";



export default  function Home() {
  
  return (
    <div>
      <Banner />
      <TrustedCards />
      <ShopByCategory />
      <NewArrival />
      <BestSelling />
      <SignatureEdition />
      <AboutUs />
      <Testimonials />
      <SONewsletter />
    </div>
  );
}
