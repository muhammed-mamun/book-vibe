import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import useLocalStorage from "../../utility/useLocalStorage";

const PagesToRead = () => {
  const { reads } = useLocalStorage();
  const newReads = reads.map(({ title, totalPage }) => ({ title, totalPage }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={newReads}
          dataKey="totalPage" // Updated prop: dataKey instead of valueKey
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            value,
            index,
          }) => {
            const RADIAN = Math.PI / 180;
            const angle = -midAngle * RADIAN;
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(angle);
            const y = cy + radius * Math.sin(angle);

            return (
              <text
                x={x}
                y={y}
                fill="#000"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
              >
                {newReads[index].title} ({value} pages)
              </text>
            );
          }}
        >
          {newReads.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={`#${(Math.random() * 0xfffff * 1000000)
                .toString(16)
                .slice(0, 6)}`}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PagesToRead;
