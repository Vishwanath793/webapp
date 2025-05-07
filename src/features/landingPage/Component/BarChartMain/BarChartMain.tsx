import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const ResponsiveHorizontalBarChart: React.FC<{
  data: { country: string; yield: number }[];
  xaxis: string;
}> = ({ data, xaxis }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });
  const tooltip = d3
    .select(containerRef.current)
    .append("div")
    .style("position", "absolute")
    .style("background", "white")
    .style("border", "1px solid #ccc")
    .style("padding", "4px 8px")
    .style("margin", "-2rem")
    .style("border-radius", "4px")
    .style("font-size", "12px")
    .style("font-weight", "700")
    .style("pointer-events", "none")
    .style("visibility", "hidden")
    .attr("class", "bar-tooltip")
    .on("mousemove", function (event: any) {
      tooltip
        .style("top", `${event.offsetY + 2}px`) // Closer vertically
        .style("left", `${event.offsetX + 5}px`); // Closer horizontally)
    });
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const { width } = entries[0].contentRect;
      setDimensions({
        width,
        height: (data.length - 1) * 40 + 90,
      });
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

    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const chart = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const barHeight = 20;
    const barSpacing = 20;
    const totalBarHeight = barHeight + barSpacing;

    const yScale = d3
      .scaleBand<string>()
      .domain(data.map((d) => d.country))
      .range([0, data.length * totalBarHeight])
      .padding(0);

    const maxValue = d3.max(data, (d) => d.yield) || 0;

    const xScale = d3
      .scaleLinear()
      .domain([0, maxValue])
      .nice()
      .range([0, innerWidth]);

    const tickCount = Math.max(2, Math.floor(innerWidth / 40));

    chart
      .append("g")
      .attr("transform", `translate(0, ${data.length * totalBarHeight})`)
      .call(d3.axisBottom(xScale).ticks(tickCount))
      .selectAll("text")
      .style("font-size", "10px")
      .style("font-weight", "bold")
      .attr("transform", "translate(0,5)");

    chart
      .append("g")
      .call(d3.axisLeft(yScale))
      .selectAll("text")
      .style("font-size", "10px")
      .style("font-weight", "bold")
      .attr("dy", `${barHeight / 2}px`);

    chart
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr(
        "y",
        (d) => (yScale(d.country) ?? 0) + yScale.bandwidth() / 2 - barHeight / 2
      )
      .attr("width", (d) => xScale(d.yield))
      .attr("height", barHeight)
      .attr("fill", "steelblue")
      .on("mouseover", function (event, d) {
        tooltip.style("visibility", "visible").text(`${d.yield}`);
        d3.select(this).attr("fill", "steelblue");
      })
      .on("mousemove", function (event) {
        tooltip
          .style("top", `${event.offsetY}px`)
          .style("left", `${event.offsetX}px`);
      })
      .on("mouseout", function () {
        tooltip.style("visibility", "hidden");
        d3.select(this).attr("fill", "steelblue");
      });

    chart
      .append("text")
      .attr("x", innerWidth / 2)
      .attr("y", data.length * totalBarHeight + 40)
      .attr("text-anchor", "middle")
      .style("font-size", "12px")
      .style("font-weight", "bold")
      .text(xaxis);
  }, [data, dimensions, xaxis]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        marginTop: "1rem",
      }}
    >
      <svg ref={svgRef} />
    </div>
  );
};

export default ResponsiveHorizontalBarChart;
