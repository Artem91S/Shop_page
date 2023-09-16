import Facebook from "../../icon/Facebook";
import Instagram from "../../icon/Instagram";
import Linkedin from "../../icon/Linkedin";
import Twitter from "../../icon/Twitter";
export default function SocialIcons({color}) {
  return (
    <div className="flex justify-center gap-6 pt-10">
    <Facebook color={color === "black" ? "#FFF" : "#1D1E25"} />
    <Twitter color={color === "black" ? "#FFF" : "#1D1E25"} />
    <Instagram color={color === "black" ? "#FFF" : "#1D1E25"} />
    <Linkedin color={color === "black" ? "#FFF" : "#1D1E25"} />
  </div>
  )
}
