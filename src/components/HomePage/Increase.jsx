import statistic from "../../img/statistic.png";
import BarStatistics from "../../img/BarStatistics.png";
import InfoSection from "../InfoSection";
import Completed from "../../icon/Completed";

const increaseData = [
  {
    id: 1,
    content: "Close more deals with single - page contact managment",
  },
  {
    id: 2,
    content: "Enjoy one-click calling, call scripts and voicemail automation",
  },
  {
    id: 3,
    content:
      "Take stages and milestones of your deals to keep the sales process an track",
  },
];
const style = {
  increaseSection: "pt-8 pb-6",
  increaseTitle: "text-2xl leading-[34px] font-[600]",
  increaseTitleDescription:
    "pt-4 text-[#7E8492]/60 text-[14px] leading-5 font-[500]",
};
export default function Increase() {
  return (
    <section className="px-5 sm:px-[30px] pt-14 pb-[14px] flex flex-col relative">
      <img className="min-w-[325px] min-h-[335px]" src={statistic} alt="statistic" />
      <img
        className="w-[171px] h-[181px] absolute top-[25%] right-[10%]"
        src={BarStatistics}
        alt="BarStatistics"
      />
      <InfoSection
        styleSection={style.increaseSection}
        styleDescription={style.increaseTitleDescription}
        styleTitle={style.increaseTitle}
        title="Passion to increase company revenue up to 85%"
        description="Automate your sales, marketing and service in one platform. Avoid date leaks and enable consistent messaging"
      />
      {increaseData.map((item) => (
        <div className="flex gap-2 item-center pb-4" key={item.id}>
          <div className="flex flex-col justify-center items-center ">
            <Completed />
          </div>
          <span className="text-[14px] leading-5">{item.content}</span>
        </div>
      ))}
    </section>
  );
}
