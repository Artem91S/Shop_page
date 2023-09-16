const advantagesData = [
  {
    id: 1,
    amount: "17k",
    text: "Happy customers on worldwide",
  },
  {
    id: 2,
    amount: "15+",
    text: "Hours of work experience",
  },
  {
    id: 3,
    amount: "50+",
    text: "Creativity & passionate members",
  },
  {
    id: 4,
    amount: "100+",
    text: "Creativity & passionate members",
  },
];
// after:content-[""] before:content-[""] before:flex after:flex after:bg-[#CED1D8] before:bg-[#CED1D8] after:h-[69px] before:h-[69px] after:w-[1px] before:w-[1px] after:absolute before:absolute after:left-[50%] before:left-[50%]  after:top-[70%] before:top-[20%]
const style = {
  section:
    'relative  grid grid-cols-[repeat(2,160px)] sm:grid-cols-[repeat(4,1fr)] gap-y-4 gap-x-8 item-center justify-center px-5 sm:px-[30px] pt-[26px] ',
};
export default function Advantages() {
  return (
    <section className={style.section}>
      {advantagesData.map((advantage) => (
        <div className='sm:flex after:content-[""] after:bg-[#CED1D8] after:h-[69px] after:w-[1px] after:flex  after:right-[50%] odd:after:top-[20%] even:after:top-[70%] ' key={advantage.id}>
        <div >
          <h5 className=" leading-[42px] text-[32px] font-[600]">
            {advantage.amount}
          </h5>
          <p className="text-[16px] leading-6 text-[#7E8492]/60 pt-2">
            {advantage.text}
          </p>
        </div>
        </div>
      ))}
    </section>
  );
}
