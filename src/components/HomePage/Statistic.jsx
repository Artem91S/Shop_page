const styles = {
  titleStyle: "text-[#5C616E]",
  amountStyle: "text-white text-sm font-[700]",
  valueStyle: "text-[12px] leading-4",
  descriptionStyle: "text-[#5C616E] pl-1",
};
const statistic = [
  {
    id: 1,
    title: "Sales",
    amount: "$31,092",
    value: "4.2% ",
    valueStyle: `${styles.valueStyle} text-[#60D39C]`,
    description: "from last year",
  },
  {
    id: 2,
    title: "Marketing",
    amount: "$29,128",
    value: "1.2% ",
    valueStyle: `${styles.valueStyle} text-[#E35454]`,
    description: "from last year",
  },
];
export default function Statistic({ up, down }) {
  return (
    <aside className="mt-6 flex p-4 justify-between bg-black rounded-[6px] shadow-[16px 32px 64px 0px #000] shadow-lg ">
      {statistic.map((item) => (
        <div key={item.key}>
          <p className={styles.titleStyle}>{item.title}</p>
          <p className={styles.amountStyle}>{item.amount}</p>
          <p className={item.valueStyle}>
            {item.value}
            <span className={styles.descriptionStyle}>{item.description}</span>
          </p>
        </div>
      ))}
    </aside>
  );
}
