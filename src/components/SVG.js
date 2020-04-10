import React from "react";
import { select, scaleLinear, max } from "d3";

const SVG = () => {
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
  svg
    .attr("width", width)
    .attr("height", height)
    .style("background-color", "red");

  // useEffect(() => { // csv not able to load file...
  //   csv("table.csv")
  //     .then(result => console.log("what is ", result))
  //     .catch(err => console.log(err));
  // }, []);

  // const g = svg
  //   .append("g")
  //   .attr("transform", `translate(${width / 2}, ${height / 2})`);

  const xScale = scaleLinear().domain([0, max(data, d => d.population)]);

  const renderData = data => {
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("width", 300)
      .attr("height", 300);
  };

  console.log(xScale.domain()); //3:27:20

  renderData(data);

  return <div></div>;
};

export default SVG;
