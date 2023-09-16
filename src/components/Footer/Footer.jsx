import Button from "../Button";
import FooterInfo from "./FooterInfo";
import FooterLinks from "./FooterLinks";
import InfoSection from "../InfoSection";
import SocialIcons from "./SocialIcons";
import OrangeCircle from "../../icon/OrangeCircle";
import GreenCircle from "../../icon/GreenCircle";
const style = {
  WaveTitle: "text-[24px] font-[600] leading- pb-[24px] ",
  WaveSection: "px-5 pb-6 pt-[51px]",
  WaveDescription:
    'flex  gap-2 text-[16px] font-[600] leading-6 before:content-[""] before:w-[69px] before:h-[1px] before:block before:mt-3',
  btnStyle: "text-[12px] py-2 px-6 bg-[#1D1E25]  rounded-[100px] ml-[50px] z-[1]",
};
export default function Footer({ color }) {
  return (
    <footer
      className={`px-5 pb-[30px] relative text-sm text-[#7E8492]/60 font-[500] bg-${color}`}
    >
      <OrangeCircle className='absolute left-0'/>
      <GreenCircle className='absolute right-0 z-[-1]'/>
      <InfoSection
        styleSection={style.WaveSection}
        styleDescription={
          color === "black"
            ? `${style.WaveDescription} text-white`
            : `${style.WaveDescription} text-black`
        }
        styleTitle={
          color === "black"
            ? `${style.WaveTitle} text-white before:bg-[#FFF]`
            : `${style.WaveTitle} text-black before:bg-[#000]`
        }
        title="Think beyond the wave"
        description="Ask about Sans products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help"
      />
      <Button
        text="Try for free"
        className={
          color === "black"
            ? `bg-[#FFF] text-black ${style.btnStyle}`
            : `bg-[#1D1E25] text-white ${style.btnStyle}`
        }
      />
      <FooterInfo color={color} />
      <SocialIcons color={color} />
      <FooterLinks />
    </footer>
  );
}
