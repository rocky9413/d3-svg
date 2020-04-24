import React, { useRef, useEffect } from 'react';
import {
  select,
  scaleLinear,
  max,
  scaleBand,
  axisLeft,
  axisBottom,
  format
} from 'd3';

const BarChart = () => {
  const data = [
    { country: 'China', population: 1415046000 },
    { country: 'India', population: 1354052000 },
    { country: 'United States', population: 326767000 },
    { country: 'Indonesia', population: 266795000 },
    { country: 'Brazil', population: 210868000 },
    { country: 'Pakistan', population: 200814000 },
    { country: 'Nigeria', population: 195875000 },
    { country: 'Bangladesh', population: 166368000 },
    { country: 'Russia', population: 143965000 },
    { country: 'Mexico', population: 130759000 }
  ];

  const width = 960;
  const height = 500;
  const margin = {
    top: 20,
    right: 50,
    bottom: 30,
    left: 150
  };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xValue = d => d.population;
  const yValue = d => d.country;

  // useEffect(() => { // csv not able to load file...
  //   csv("table.csv")
  //     .then(result => console.log("what is ", result))
  //     .catch(err => console.log(err));
  // }, []);

  const isCurrent = useRef(true);

  useEffect(() => {
    const xScale = scaleLinear()
      .domain([0, max(data, xValue)])
      .range([0, innerWidth]);

    const yScale = scaleBand()
      .domain(data.map(yValue))
      .range([0, innerHeight])
      .padding(0.1);

    const g = select('svg').append('g');
    g.attr('transform', `translate(${margin.left}, ${margin.top})`);

    const xAxisTickFormat = number => format('.3s')(number).replace('G', 'B');
    const xAxis = axisBottom(xScale).tickFormat(xAxisTickFormat);

    g.append('g').call(axisLeft(yScale));
    g.append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${innerHeight})`);

    g.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('y', d => yScale(yValue(d)))
      .attr('width', d => xScale(xValue(d)))
      .attr('height', yScale.bandwidth());

    return () => {
      isCurrent.current = false;
    };
  }, []);

  // 3:51:40

  return isCurrent.current ? (
    <div>
      <svg width={width} height={height}></svg>
    </div>
  ) : null;
};

export default BarChart;
