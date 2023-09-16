import GreenCircle from "../../icon/GreenCircle";
import Button from "../Button";
import InfoSection from "../InfoSection";
const style = {
  digitalSection: " pt-8 ",
  digitallyTitle: "text-[32px] font-[700] leading-10 pb-12 sm:pb-[60px] ",
  digitallyDescription:'sm:w-[200px] flex gap-2 text-[16px] font-[500] leading-6 before:content-[""] before:w-[69px] before:bg-black before:h-[1px] before:block before:mt-3'
};

export default function Creative() {
  return (
    <section className="px-5 sm:px-0 sm:basis-[37%]">
      <InfoSection
        styleSection={style.digitalSection}
        styleTitle={style.digitallyTitle}
        styleDescription={style.digitallyDescription}
        title="Digitally forward creative"
        description="Our biggest challenge is making sure were always designing and building products that will help you run your business better."
      />
    <div className="flex gap-2 justify-center sm:flex-col pt-10">
      <GreenCircle
      className='w-[197px] h-[350px] absolute right-0 top-[15%] z-[-1] sm:hidden'
      />
      <input
        className="w-[219px]  text-[#7E8492] placeholder:text-[14px] border-b-[1px] border-[#7E8492] pb-4"
        type="email"
        placeholder="Enter you email"
      />
      <Button
        text="Try for free"
        className="text-[10px] py-[3px] px-[20px] sm:py-3 bg-[#1D1E25] text-white rounded-[100px] w-[108px]"
      />
    </div>
    </section>
  );
}
