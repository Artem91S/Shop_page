import MainLogo from "../../icon/MainLogo";
import MenuMob from "./MenuMob";

const menuItems = [
  {
    id: 1,
    content: "Home",
  },
  {
    id: 2,
    content: "About",
  },
  {
    id: 3,
    content: "Blog",
  },
  {
    id: 4,
    content: "Pricing",
  },
];

export default function Header() {
  return (
    <header className="flex justify-between items-center px-5 pt-6 ">
      <MainLogo />
      <MenuMob />
    </header>
  );
}
