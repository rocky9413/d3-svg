import React from "react";
import { select, scaleLinear, max, scaleBand, axisLeft, axisBottom } from "d3";

const BarChart = () => {
  const width = 960;
  const height = 500;

  const data = [
    { country: "China", population: 1415046000 },
    { country: "India", population: 1354052000 },
    { country: "United States", population: 326767000 },
    { country: "Indonesia", population: 266795000 },
    { country: "Brazil", population: 210868000 },
    { country: "Pakistan", population: 200814000 },
    { country: "Nigeria", population: 195875000 },
    { country: "Bangladesh", population: 166368000 },
    { country: "Russia", population: 143965000 },
    { country: "Mexico", population: 130759000 }
  ];

  const svg = select("body").append("svg");
  svg.attr("width", width).attr("height", height);
  // .style("background-color", "red");

  // useEffect(() => { // csv not able to load file...
  //   csv("table.csv")
  //     .then(result => console.log("what is ", result))
  //     .catch(err => console.log(err));
  // }, []);

  (function renderData(data) {
    const xValue = d => d.population;
    const yValue = d => d.country;
    const margin = {
      top: 20,
      right: 50,
      bottom: 20,
      left: 100
    };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = scaleLinear()
      .domain([0, max(data, xValue)])
      .range([0, innerWidth]);

    const yScale = scaleBand()
      .domain(data.map(yValue))
      .range([0, innerHeight])
      .padding(0.1);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // const yAxis = axisLeft(yScale);
    // yAxis(g.append("g"));
    g.append("g").call(axisLeft(yScale));
    g.append("g")
      .call(axisBottom(xScale))
      .attr("transform", `translate(0, ${innerHeight})`);

    g.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("y", d => yScale(yValue(d)))
      .attr("width", d => xScale(xValue(d)))
      .attr("height", yScale.bandwidth());
  })(data);

  return <div></div>;
};

export default BarChart;
