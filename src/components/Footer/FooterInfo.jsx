import MainLogo from "../../icon/MainLogo";

export default function FooterInfo({color}) {
  return (
    <div className="pt-[56px] px-5 border-[#CED1D8] border-b-[1px]">
    <MainLogo
      width={95}
      height={44}
      color={color === "black" ? "#FFF" : "#1D1E25"}
      fill={color === "black" ? "#1D1E25" : "#FFF"}
    />
    <p className="text-[#7E8492]/60 text-sm font-[500] pt-[9px] pb-[56px]">
      We built an elegant solution. Our team created a fully integrated
      sales and marketing solution for SMBs
    </p>
  </div>
  )
}
