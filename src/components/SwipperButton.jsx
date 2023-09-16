import { useSwiper } from "swiper/react";
import ArrowLeft from "./../icon/ArrowLeft";
import ArrowRight from "./../icon/ArrowRight";
export default function SwipperButton() {
    const swiper = useSwiper();

  return (
    <div slot="container-start" className="flex gap-2 absolute bottom-0 right-2 z-30">
         <div onClick={() =>swiper.slidePrev()}
        className="max-w-[28px] max-h-[28px] p-[6px] border-[#CED1D8] border-[1px] rounded-[100px]">
            <ArrowLeft />
          </div>
          <div onClick={() => swiper.slideNext()}
          className="max-w-[28px] max-h-[28px] p-[6px] rounded-[100px] bg-[#1D1E25] cursor-pointer">
            <ArrowRight />
          </div>
        </div>
  )
}
