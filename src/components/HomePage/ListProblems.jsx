import DataList from "../../icon/DataList";
import Effective from "../../icon/Effective";
import ListData from "../../icon/ListData";
import Privacy from "../../icon/Privacy";
import InfoSection from "../InfoSection";
const problems = [
  {
    id: 1,
    icon: <DataList />,
    title: "Build your date fundamental",
    content:
      "Build access to date, develop valuable business insights and drive revenue while maintaining full control over access and use of date at all times.",
  },
  {
    id: 2,
    icon: <Effective />,
    title: "Measure more effective",
    content:
      "Effectively measure people-based campaigns with the freedom to choose from best-of breed partners to optimize and drive media innovation.",
  },
  {
    id: 3,
    icon: <ListData />,
    title: "Activate your date",
    content:
      "Accurately address your specific audiences at scale across any channel, platform, publisher or network and safely translate date between identity space to improve results.",
  },
  {
    id: 4,
    icon: <Privacy />,
    title: "Strengthen consumer privacy",
    content:
      "Protect your customer date with leading privacy-preserving technologies and advanced techniques to minimize date movement while still enabling insight generation.",
  },
];
const style = {
  problemTitle: "text-[24px] font-[600] sm:w-[290px] leading-8 text-white",
  problemDescription:
    "text-[14px] font-[500] leading-5 pt-4 pb-8 text-[#7E8492]/60 sm:w-[400px] ",
};
export default function ListProblems() {
  return (
    <section className="bg-[#1D1E25] py-10 px-5 sm:px-[30px] pb-4 border-0 text-white">
      <InfoSection
        styleDescription={style.problemDescription}
        styleTitle={style.problemTitle}
        title="Sans help our client solve complex customer problems with date that does more."
        description="Our platform offers the modern enterprise full control of how date can be access and used with industry leading software solutions for identity, activation, and date collaboration"
      />
      <div className='sm:flex sm:gap-[50px] sm:flex-wrap'>
      {problems.map((item) => (
        <div className="flex flex-col gap-4 sm:basis-[40%]" key={item.id}>
          {item.icon}
          <h4 className="text-[18px] leading-[26px] font-[600] sm:w-[249px]">
            {item.title}
          </h4>
          <p className="text-[#7E8492]/60 leading-5 text-[14px] pb-6 sm:w-[250px]">
            {item.content}
          </p>
        </div>
      ))}
      </div>
    </section>
  );
}
