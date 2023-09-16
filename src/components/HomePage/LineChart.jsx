import {
  LineChart,
  CartesianGrid,
  YAxis,
  XAxis,
  Line,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
const data = [
  {
    name: "May",
    "My product": 410,
    Competitor: 430,
  },
  {
    name: "Jun",
    "My product": 590,
    Competitor: 530,
  },
  {
    name: "Jul",
    "My product": 820,
    Competitor: 740,
  },
  {
    name: "Aug",
    "My product": 600,
    Competitor: 550,
  },
  {
    name: "Sep",
    "My product": 700,
    Competitor: 600,
  },
  {
    name: "Oct",
    "My product": 500,
    Competitor: 500,
  },
];

export default function LineCharts() {
  return (
    <ResponsiveContainer minWidth={294} minHeight={208} >
    <LineChart 
    className='z-10'
    data={data}>
      <XAxis
        dx={-4}
        tick={{ fontSize: "10px", color: "#808D9E", lineHeight: "20px" }}
        axisLine={false}
        tickLine={false}
        dataKey="name"
      />
      <YAxis
        dx={-24}
        tickCount={6}
        tick={{ fontSize: "10px", color: "#808D9E", lineHeight: "20px" }}
        axisLine={false}
        tickLine={false}
        type="number"
      />
      L
      <Tooltip
        viewBox={{ x: 1, y: 2, width: 100, height: 100 }}
        wrapperStyle={{ width: 85, height: 85, fontSize: "8px" }}
      />
      <Legend
        verticalAlign="top"
        width="100%"
        iconType="square"
        iconSize={9}
        align="left"
        inactiveColor="#000"
        wrapperStyle={{
          position: "absolute",
          paddingBottom: "20px",
          fontSize: "12px",
          display: "flex",
          gap: "30px",
        }}
        t
      />
      <CartesianGrid
        horizontal={false}
        style={{ background: "#E9ECF2)", strokeWidth: "1" }}
      />
      <Line
        type="bump"
        dataKey="My product"
        stroke="#2280FF"
        dot={false}
        strokeWidth={2}
      />
      <Line
        type="bump"
        dataKey="Competitor"
        stroke="#FF5555"
        dot={false}
        strokeWidth={2}
      />
    </LineChart>
    </ResponsiveContainer>
  );
}
