import AirBnb from '../../icon/AirBnb';
import Amazon from '../../icon/Amazon';
import FedEx from '../../icon/FedEx';
import Microsoft from '../../icon/Microsoft';
import Oyo from '../../icon/Oyo';
import Walmart from '../../icon/Walmart';
import Google from '../../icon/Google';
import Ola from '../../icon/Ola';

const PartnersData =[
  {
    id:1,
    log:<AirBnb/>
  },
  {
    id:2,
    log:<Amazon/>
  },
  {
    id:3,
    log:<FedEx/>
  },
  {
    id:4,
    log:<Microsoft/>
  },
  {
    id:5,
    log:<Oyo/>
  },
  {
    id:6,
    log:<Walmart/>
  },
  {
    id:7,
    log:<Google/>
  },
  {
    id:8,
    log:<Ola/>
  },
]

export default function Partners() {
  return (
    <div
    className='grid grid-cols-[repeat(2,1fr)] gap-y-4 gap-x-[14px] pt-8'
    >
      {PartnersData.map(logo =>(
        <div
        className='min-w-[125px] min-h-[70px] flex justify-center items-center'
        key={logo.id}
        >
        {logo.log}
        </div>
      ))}
    </div>
  )
}
