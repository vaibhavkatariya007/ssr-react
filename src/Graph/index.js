import React from 'react';
import { Line, defaults } from 'react-chartjs-2';
import './Graph.css';

defaults.global.elements.line.borderWidth = 1;
defaults.global.elements.line.fill = false;
defaults.scale.gridLines.drawTicks = false;
defaults.scale.ticks.padding = 15;

const Graph = ({ data }) => (
  <div className="timeline-chart">
    <Line
      data={data}
      height={350}
      options={{
        legend: {
          position: 'left',
          labels: {
            boxWidth: 0,
          },
        },
        layout: {
          padding: { left: 0, right: 0, top: 0, bottom: 0 },
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      }}
    />
  </div>
);

export default Graph;
