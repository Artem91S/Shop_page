import InfoSection from "../InfoSection";
import Smile from "../../icon/Smile";
import GroupPerson from "../../icon/GroupPerson";
import GrowUp from "../../icon/GrowUp";
import Presentation from "../../icon/Presentation";
const style = {
  listBenefitsSection: "flex flex-col gap-2 w-[159px]",
  listBenefitsTitle: " text-[16px] leading-6 font-[600]",
  listBenefitsTitleDescription:
    "text-[15px] font-[400] text-[#7E8492]/60 w-[159px]",
  listPicture: "relative w-[219px] h-[235px]  bg-no-repeat bg-cover",
};
const postersData = [
  {
    id: 1,
    link: `${style.listPicture} bg-[url('img/Happiness.png')] bg-center`,
    icon: <Smile />,
    title: "Lead happiness for customers",
    description:
      "Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster",
  },
  {
    id: 2,
    link: `${style.listPicture} bg-[url('img/Together.png')]`,
    icon: <GroupPerson />,
    title: "Have fun growing together",
    description:
      "Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster",
  },
  {
    id: 3,
    link: `${style.listPicture} bg-[url('img/Support.png')] bg-center `,
    icon: <GrowUp />,
    title: "Mutually support each other",
    description:
      "Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster",
  },
  {
    id: 4,
    link: `${style.listPicture} bg-[url('img/Grow.png')] bg-center`,
    icon: <Presentation />,
    title: "Make Your Business Grow",
    description:
      "Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster",
  },
];
export default function ListBenefits() {
  return (
    <div className="flex flex-col gap-6">
      {postersData.map((item) => (
        <div key={item.id} className="flex gap-4">
          <div className={item.link}>
            <div className="absolute right-[12px] top-[12px] bg-[#161A3499]/60 p-2 rounded-full cursor-pointer">
              {item.icon}
            </div>
          </div>
          <InfoSection
            styleSection={style.listBenefitsSection}
            styleDescription={style.listBenefitsTitleDescription}
            styleTitle={style.listBenefitsTitle}
            title={item.title}
            description={item.description}
          />
        </div>
      ))}
    </div>
  );
}
