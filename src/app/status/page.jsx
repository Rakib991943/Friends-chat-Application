"use client";

import { MeetContext } from '@/context/MeetContext';
import { useContext } from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';



export default function PieChartWithPaddingAngle() {

  const { meetData } = useContext(MeetContext);


  const callCount = meetData.filter(
    item => item.type?.toLowerCase() === "call"
  ).length;

  const videoCount = meetData.filter(
    item => item.type?.toLowerCase() === "video"
  ).length;

  const textCount = meetData.filter(
    item => item.type?.toLowerCase() === "text"
  ).length;

  const data = [
    { name: 'Call', value: callCount, fill: '#ff4d6d' },
    { name: 'Video', value: videoCount, fill: '#845ef7' },
    { name: 'Text', value: textCount, fill: '#5c7cfa' },
  ];

  return (
    <div className='flex justify-center items-center p-7'>

      <PieChart
        style={{
          width: '100%',
          maxWidth: '500px',
          maxHeight: '80vh',
          aspectRatio: 1
        }}
      >

        <Pie
          data={data}
          innerRadius="60%"   
          outerRadius="100%"
          cornerRadius={10}
          paddingAngle={5}
          dataKey="value"
        />

        <Tooltip />
        <Legend />

      </PieChart>

    </div>
  );
}