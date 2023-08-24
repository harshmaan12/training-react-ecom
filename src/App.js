import CurratedBlock from "./components/sample/CurratedBlocks";
import HomePageBanner from "./components/sample/HomePage";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" overflow-x-hidden  lg:p-6 ">

      <HomePageBanner></HomePageBanner>
     
      <CurratedBlock/>
      <Brands />
      <Footer/>
    </div>
  );
}

export default App;
