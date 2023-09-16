import Advantages from "../components/HomePage/Advantages";
import Benefits from "../components/HomePage/Benefits";
import Creative from "../components/HomePage/Creative";
import Experience from "../components/HomePage/Experience";
import Feedback from "../components/HomePage/Feedback";
import Increase from "../components/HomePage/Increase";
import ListProblems from "../components/HomePage/ListProblems";
import TrendingNews from "../components/HomePage/TrendingNews";
import OrangeCircle from "../icon/OrangeCircle";
import SaleReport from "../components/HomePage/SaleReport";

export default function Home() {


  return (
    <>
    <main >
     <OrangeCircle className='z-[-1] absolute top-0 sm:w-[300px] sm:h-[500]'/>
     <div className='sm:flex sm:px-[30px] sm:relative'>
      <Creative />
      <SaleReport/>
      </div>
      <ListProblems />
      <Increase />
      <Advantages />
      <Experience />
      <Benefits />
      <TrendingNews />
      <Feedback />
    </main>
     </>
  );
}
