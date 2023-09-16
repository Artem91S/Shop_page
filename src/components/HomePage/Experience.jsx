import InfoSection from "../InfoSection";
import GroupPeople from "../../img/groupPeople.png";
import Partners from "./Partners";
const style = {
  experienceSection: "pt-10",
  experienceTitle: "text-2xl font-[600] pb-4",
  experienceTitleDescription: "text-sm font-[500] text-[#7E8492]/60",
  partnersSection: "pt-[56px]",
  partnersTitle: "text-2xl font-[700] pb-2",
  partnersTitleDescription: "text-sm font-[500] text-[#7E8492]/60 w-[231px]",
};

export default function Experience() {
  return (
    <section className="px-5 pt-8">
      <img src={GroupPeople} alt="Group of people" />
      <InfoSection
        styleSection={style.experienceSection}
        styleDescription={style.experienceTitleDescription}
        styleTitle={style.experienceTitle}
        title="Drive sustainable growth with personal and engaging experiences"
        description="Our biggest challenge is making sure were always designing and building products that will help you run your business better."
      />
      <InfoSection
        styleSection={style.partnersSection}
        styleDescription={style.partnersTitleDescription}
        styleTitle={style.partnersTitle}
        title=" 890+"
        description="some big companies that we work with, and trust us very much"
      />
      <Partners />
    </section>
  );
}
