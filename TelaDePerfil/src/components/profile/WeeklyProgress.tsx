import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  datasets: [
    {
      label: 'Horas de Estudo',
      data: [2, 3.5, 4, 2.5, 4.5, 3, 1.5],
      borderColor: '#6C5CE7',
      backgroundColor: '#6C5CE7',
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#6C5CE7',
      padding: 12,
      titleFont: {
        size: 14,
        family: "'Roboto', sans-serif",
      },
      bodyFont: {
        size: 14,
        family: "'Roboto', sans-serif",
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Horas',
        font: {
          size: 12,
          family: "'Roboto', sans-serif",
        },
      },
    },
  },
};

export function WeeklyProgress() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
        Progresso Semanal
      </h2>
      <div className="h-[200px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}