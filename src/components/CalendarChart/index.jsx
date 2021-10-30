import { useState, useRef, useEffect } from "react";
import * as echarts from "echarts";

import styles from './style.module.scss'

let chart;

const CalendarCharts = ({ data, year, min, max, title }) => {
  const ref = useRef(null);
  useEffect(() => {
    const chart = echarts.init(ref.current);
    const option = {
      title: {
        top: 30,
        left: 'center',
        text: title || '活跃度'
      },
      tooltip: {
        position: 'top',
        formatter: function (params) {
          const value = params.value
          // value 格式 [date, num]
          return value[0] + ': ' + value[1] + ' post.'
        }
      },
      visualMap: {
        min: min || 0,
        max: max || 100,
        type: "piecewise",
        orient: "horizontal",
        left: "center",
        top: 65,
        inRange: {
          color: ['#ffffff', "#0c800f"],
        },
      },
      calendar: [
        {
          top: 120,
          left: 'center',
          cellSize: ["auto", 13],
          backgroundColor: '#ffffff',
          range: year || new Date().getFullYear().toString(),
          itemStyle: {
            borderWidth: 2,
            borderColor: '#e1e2e5',
            barBorderRadius: 3
          },
          yearLabel: { show: true },
          splitLine: {
            show: false
          }
        }
      ],
      series: [
        {
          type: "heatmap",
          coordinateSystem: "calendar",
          data: data,
        }
      ],
    };
    chart.setOption(option);
    return () => {
      chart.clear()
      chart.dispose()
    }
  }, [data, year]);
  return <div ref={ref} className={styles.chart}></div>;
};

export default CalendarCharts;
