import InfoSection from "../InfoSection";
import ScrollArrow from "../../icon/scrollArrow";
import employee from "../../img/employee.png";
import relationship from "../../img/relationship.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const style = {
  trendingSection: "pt-14 px-5 ",
  trendingTitle: "text-2xl font-[600] pb-4",
  trendingDescription: "text-sm text-[#7E8492]",
  boxSlider: `max-w-[315px] relative`,
};
const newContent = [
  {
    id: 1,
    title: "What makes an authentic employee profile, and why does it matter ?",
    author: "by:Albert Sans",
    date: "Published in Insight Jan 30, 2023",
    poster: employee,
    alt: "employee",
    styles: `${style.boxSlider} z-[-1]`,
  },
  {
    id: 2,
    title: "How to build a Kaylen relationship with a good company",
    author: "by:Sandra Bons",
    date: "Published in Insight Mach 21, 2023",
    poster: relationship,
    alt: "relationship",
    styles: `${style.boxSlider} z-[-2]`,
  },
  {
    id: 3,
    title: "How to build a Kaylen relationship with a good company",
    author: "by:Sandra Bons",
    date: "Published in Insight Mach 21, 2023",
    poster: relationship,
    alt: "relationship",
    styles: `${style.boxSlider} z-[-3]`,
  },
];
export default function TrendingNews() {
  return (
    <section>
      <InfoSection
        styleSection={style.trendingSection}
        styleDescription={style.trendingDescription}
        styleTitle={style.trendingTitle}
        title="Trending news from Coca"
        description="we have some new Service to pamper you"
      />
      <Swiper slidesPerView={1} className="px-5 flex gap-4 pt-8 pb-[36px]">
        {newContent.map((poster) => (
          <SwiperSlide key={poster.id} className={poster.styles}>
            <img className="w-[299px] " src={poster.poster} alt={poster.alt} />
            <div className="absolute bg-white p-2 right-[-4%] top-[30%] rounded-full z-10">
              <ScrollArrow />
            </div>
            <div className="flex w-[299px] items-center justify-between pt-2">
              <span className="text-[12px] leading-[20px] text-[#7E8492]">
                {poster.date}
              </span>
              <span className="text-[12px] leading-[18px] text-[#7E8492]">
                {poster.author}
              </span>
            </div>
            <p className="w-[299px] text-[16px] font-[600] leading-6 pt-2">
              {poster.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
