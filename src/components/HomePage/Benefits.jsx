import InfoSection from "../InfoSection";
import ListBenefits from "./ListBenefits";
const style = {
  benefitsSection: "pt-[56px]",
  benefitsTitleDescription: "text-sm font-[500] pb-8 text-[#7E8492]/60",
  benefitsTitle: "text-2xl leading-6 font-[600] pb-4",
};
export default function Benefits() {
  return (
    <section className="px-5 pt-[56px]">
      <InfoSection
        styleSection={style.benefitsSection}
        styleDescription={style.benefitsTitleDescription}
        styleTitle={style.benefitsTitle}
        title="Here’s how Sans can benefit your business "
        description="Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster"
      />
      <ListBenefits />
    </section>
  );
}
