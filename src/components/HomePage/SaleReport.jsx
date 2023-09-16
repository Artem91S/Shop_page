import GreenCircle from '../../icon/GreenCircle';
import LineChart from './LineChart';
import BarChart  from '../../img/BarChart.png';
import Statistic from './Statistic';
export default function SaleReport() {

  // 
  return (
    <section className="px-5  py-[56px] relative sm:static overflow-hidden sm:basis-[67%]">
    <GreenCircle className='absolute z-[-1] w-[355px] h-[918px] sm:h-[400px] top-0 right-0'/>
    <div 

    className=' shadow-lg rounded-[7px] p-4 z-10 '
    >
     <img className='w-[148px] h-[152px] absolute right-[-47px] sm:right-0 top-9 z-30 'src={BarChart} alt="BarChart" />
      <h3 className="text-[16px] leading-6 font-[700] pb-[18px]">Sales Report</h3>
      <LineChart/>
      </div>
      <Statistic/>
    </section>
  )
}
