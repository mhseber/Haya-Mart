import Banner from "./Or-Components/Home/Banner";
import NewArrival from "./Or-Components/Home/NewArrival";
import ShopByCategory from "./Or-Components/Home/ShopByCategory";
import TrustedCards from "./Or-Components/Home/TrustedCards";


export default function Home() {
  return (
    <div>
      <Banner />
      <TrustedCards />
      <ShopByCategory />
      <NewArrival />
    </div>
  );
}
