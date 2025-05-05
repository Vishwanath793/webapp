import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const ResponsiveHorizontalBarChart = ({ data, xaxis }) => {
  console.log("dataResponsiveHorizontalBarChart", data);
  const containerRef = useRef();
  const svgRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const { width } = entries[0].contentRect;
      setDimensions({ width, height: (data.length - 1) * 40 + 90 }); // Set height based on data length
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [data.length]);

  useEffect(() => {
    const { width, height } = dimensions;
    if (width === 0 || height === 0) return;

    const margin = { top: 0, right: 30, bottom: 30, left: 38 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Clear previous chart
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const chart = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const barHeight = 20; // Fixed height for each bar
    const barSpacing = 20; // Fixed spacing between bars
    const totalBarHeight = barHeight + barSpacing; // Total height per bar including spacing

    const yScale = d3
      .scaleBand()
      .domain(data.map((d) => d.country))
      .range([0, data.length * totalBarHeight])
      .padding(0); // No additional padding since spacing is handled manually

    const maxValue = d3.max(data, (d) => d.yield) || 0;

    const xScale = d3
      .scaleLinear()
      .domain([0, maxValue])
      .nice()
      .range([0, innerWidth]);

    // Dynamically set ticks based on width
    const tickCount = Math.max(2, Math.floor(innerWidth / 40)); // 80px per tick approx

    chart
      .append("g")
      .attr("transform", `translate(0, ${data.length * totalBarHeight})`)
      .call(d3.axisBottom(xScale).ticks(tickCount))
      .selectAll("text")
      .style("font-size", "10px")
      .style("font-weight", "bold") // Make X-axis labels bold
      .attr("transform", "translate(0,5)");

    chart
      .append("g")
      .call(d3.axisLeft(yScale))
      .selectAll("text")
      .style("font-size", "10px")
      .style("font-weight", "bold") // Make X-axis labels bold
      .attr("dy", `${barHeight / 2}px`); // Center Y-axis labels with bars

    chart
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr(
        "y",
        (d) => yScale(d.country) + yScale.bandwidth() / 2 - barHeight / 2
      ) // Center bars
      .attr("width", (d) => xScale(d.yield))
      .attr("height", barHeight)
      .attr("fill", "steelblue");

    chart
      .append("text")
      .attr("x", innerWidth / 2) // Center horizontally
      .attr("y", data.length * totalBarHeight + 40) // Position below X-axis
      .attr("text-anchor", "middle") // Center text
      .style("font-size", "12px")
      .style("font-weight", "bold") // Make X-axis labels bold
      .text(xaxis); // Replace with your desired label
  }, [data, dimensions]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        // height: `${10 + data.length}px`, // Fixed height based on data length
        marginTop: "1rem",
      }}
    >
      <svg ref={svgRef} />
    </div>
  );
};

export default ResponsiveHorizontalBarChart;

// import React, { useRef, useEffect, useState } from "react";
// import * as d3 from "d3";

// interface DataPoint {
//   country: string;
//   yield: number;
// }

// interface ResponsiveHorizontalBarChartProps {
//   data: DataPoint[];
//   xaxis: string;
// }

// const ResponsiveHorizontalBarChart: React.FC<
//   ResponsiveHorizontalBarChartProps
// > = ({ data, xaxis }) => {
//   console.log("dataResponsiveHorizontalBarChart", data);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const [dimensions, setDimensions] = useState<{
//     width: number;
//     height: number;
//   }>({ width: 0, height: 0 });

//   useEffect(() => {
//     const observer = new ResizeObserver((entries) => {
//       if (!entries || entries.length === 0) return;
//       const { width } = entries[0].contentRect;
//       setDimensions({ width, height: (data.length - 1) * 40 + 90 }); // Set height based on data length
//     });

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => observer.disconnect();
//   }, [data.length]);

//   useEffect(() => {
//     const { width, height } = dimensions;
//     if (width === 0 || height === 0) return;

//     const margin = { top: 0, right: 30, bottom: 30, left: 38 };
//     const innerWidth = width - margin.left - margin.right;
//     const innerHeight = height - margin.top - margin.bottom;

//     // Clear previous chart
//     d3.select(svgRef.current).selectAll("*").remove();

//     const svg = d3
//       .select(svgRef.current)
//       .attr("width", width)
//       .attr("height", height);

//     const chart = svg
//       .append("g")
//       .attr("transform", `translate(${margin.left},${margin.top})`);

//     const barHeight = 20; // Fixed height for each bar
//     const barSpacing = 20; // Fixed spacing between bars
//     const totalBarHeight = barHeight + barSpacing; // Total height per bar including spacing

//     const yScale = d3
//       .scaleBand<string>()
//       .domain(data.map((d) => d.country))
//       .range([0, data.length * totalBarHeight])
//       .padding(0); // No additional padding since spacing is handled manually

//     // const maxValue = d3.max(data, (d) => d.yield) || 0;
//     const maxValue = d3.max(data, (d: DataPoint) => d.yield) || 0;

//     const xScale = d3
//       .scaleLinear()
//       .domain([0, maxValue])
//       .nice()
//       .range([0, innerWidth]);

//     // Dynamically set ticks based on width
//     const tickCount = Math.max(2, Math.floor(innerWidth / 40)); // 80px per tick approx

//     chart
//       .append("g")
//       .attr("transform", `translate(0, ${data.length * totalBarHeight})`)
//       .call(d3.axisBottom(xScale).ticks(tickCount))
//       .selectAll("text")
//       .style("font-size", "10px")
//       .style("font-weight", "bold") // Make X-axis labels bold
//       .attr("transform", "translate(0,5)");

//     chart
//       .append("g")
//       .call(d3.axisLeft(yScale))
//       .selectAll("text")
//       .style("font-size", "10px")
//       .style("font-weight", "bold") // Make X-axis labels bold
//       .attr("dy", `${barHeight / 2}px`); // Center Y-axis labels with bars

//     chart
//       .selectAll("rect")
//       .data(data)
//       .join("rect")
//       .attr(
//         "y",
//         (d: { country: string }) =>
//           (yScale(d.country) || 0) + yScale.bandwidth() / 2 - barHeight / 2
//       )
//       .attr("width", (d: { yield: number }) => xScale(d.yield))

//       .attr("height", barHeight)
//       .attr("fill", "steelblue");

//     // .attr(
//     //   "y",
//     //   (d) => (yScale(d.country) || 0) + yScale.bandwidth() / 2 - barHeight / 2
//     // ) // Center bars
//     // .attr("width", (d) => xScale(d.yield))
//     chart
//       .append("text")
//       .attr("x", innerWidth / 2) // Center horizontally
//       .attr("y", data.length * totalBarHeight + 40) // Position below X-axis
//       .attr("text-anchor", "middle") // Center text
//       .style("font-size", "12px")
//       .style("font-weight", "bold") // Make X-axis labels bold
//       .text(xaxis); // Replace with your desired label
//   }, [data, dimensions]);

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         width: "100%",
//         marginTop: "1rem",
//       }}
//     >
//       <svg ref={svgRef} />
//     </div>
//   );
// };

// export default ResponsiveHorizontalBarChart;
