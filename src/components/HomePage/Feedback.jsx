import InfoSection from "../InfoSection";
import Brackets from "../../icon/Brackets";
import Star from "../../icon/Star";
import Wells from "../../img/Wells.jpeg";
import Sandra from "../../img/Sandra.jpeg";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwipperButton from "../SwipperButton";
const styles = {
  feedbackTitle: "text-[24px] font-[700] leading-10 max-w-[247px] pb-4",
  feedbackDescription: "text-sm font-[500] text-[#7E8492]/60 max-w-[229px]",
};
const poster = [
  {
    id: 1,
    content:
      "“With Agency the results are very satisfying. wrapped with High quality and innovative design that makes a surge of visitors on my website“",
    photo: Wells,
    alt: "Wells",
    name: "Renee Wells",
    profession: "Product Designer, Quotient",
    start: [<Star />, <Star />, <Star />, <Star />, <Star />],
    length: "5.0",
  },
  {
    id: 2,
    content:
      "“With Agency the results are very satisfying. wrapped with High quality and innovative design that makes a surge of visitors on my website“",
    photo: Sandra,
    alt: "Sandra",
    name: "Renee Wells",
    profession: "Pr- manager, Quotient",
    start: [<Star />, <Star />, <Star />, <Star />, <Star fill="none" />],
    length: "4.0",
  },
];

export default function Feedback() {
  return (
    <section className="px-5 pt-[56px] pb-[80px] relative ">
      <InfoSection
        styleDescription={styles.feedbackDescription}
        styleTitle={styles.feedbackTitle}
        title="What our customer are saying"
        description="We are trusted numerous companies from different business to meet their needs"
      />
      <Swiper modal={[Navigation, Pagination, A11y]} slidesPerView={1}>
        {poster.map((poster) => (
          <SwiperSlide key={poster.id} className="flex pt-[56px]">
            <Brackets width={100} height={40} />
            <div className="pt-4">
              <div className="flex gap-2 items-center">
                {poster.start.map((start) => (
                  <>{start}</>
                ))}
                <p>{poster.length}</p>
              </div>
              <span>{poster.content}</span>
              <div className="flex items-center  gap-[12px] w-[208px] pt-4">
                <img
                  className="w-[40px] rounded-[40px]"
                  src={poster.photo}
                  alt={poster.alt}
                />
                <p className="flex flex-col justify-start pt-2">
                  <span className="text-sm font-[600]">{poster.name}</span>
                  <span className="text-[12px] font-[500] text-[#7E8492]/60">
                    {poster.profession}
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwipperButton />
      </Swiper>
    </section>
  );
}
