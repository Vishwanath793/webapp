import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

export interface ChartPoint {
  x: string | number | Date;
  y: number;
}

export interface ChartData {
  label: string;
  data: ChartPoint[];
}

interface LineChartProps {
  data: ChartData[];
  xTicks?: number;
}

const LineChart: React.FC<LineChartProps> = ({ data, xTicks = 5 }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(700); // Default width
  const height = 250; // Fixed height

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };

    // Set initial width
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!data.length) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const tooltip = d3.select(tooltipRef.current);

    const margin = { top: 40, right: 30, bottom: 40, left: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Add gradient background
    const defs = svg.append("defs");
    const gradient = defs
      .append("linearGradient")
      .attr("id", "chartGradient")
      .attr("x1", "0%")
      .attr("y1", "100%")
      .attr("x2", "0%")
      .attr("y2", "0%");
    gradient.append("stop").attr("offset", "0%").attr("stop-color", "#f3f4f6"); // Light color
    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#e5e7eb"); // Darker color

    // Add background rectangle
    g.append("rect")
      .attr("width", innerWidth)
      .attr("height", innerHeight)
      .attr("fill", "url(#chartGradient)")
      .attr("stroke", "black") // Border color
      .attr("stroke-width", 1); // Border width;

    const allPoints = data.flatMap((d) => d.data);
    const xValues = allPoints.map((d) => d.x as string);
    const uniqueX = Array.from(new Set(xValues));

    const xScale = d3
      .scalePoint()
      .domain(xValues)
      .range([0, innerWidth])
      .padding(0.5);

    const yMax = d3.max(allPoints, (d) => d.y) ?? 0; // Default to 0 if no data
    const yMaxAdjusted = Math.ceil((yMax * 1.1) / 10) * 10; // Add 10% and round to next 10th place
    const yScale = d3
      .scaleLinear()
      .domain([0, yMaxAdjusted]) // Use adjusted max value
      .nice()
      .range([innerHeight, 0]);

    const color = d3
      .scaleOrdinal<string>()
      .domain(data.map((d) => d.label))
      .range(d3.schemeCategory10);

    // X-axis
    g.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale).ticks(xTicks))
      .selectAll("text")
      .attr("transform", "rotate(-40)")
      .style("text-anchor", "end");

    // Y-axis
    g.append("g").call(d3.axisLeft(yScale));

    // Draw lines and points
    const lineGenerator = d3
      .line<ChartPoint>()
      .x((d) => xScale(d.x as string)!)
      .y((d) => yScale(d.y));

    data.forEach((series) => {
      g.append("path")
        .datum(series.data)
        .attr("fill", "none")
        .attr("stroke", color(series.label) as string)
        .attr("stroke-width", 2)
        .attr("d", lineGenerator);

      g.selectAll(`.dot-${series.label}`)
        .data(series.data)
        .enter()
        .append("circle")
        .attr("class", `dot-${series.label}`)
        .attr("cx", (d) => xScale(d.x as string)!)
        .attr("cy", (d) => yScale(d.y))
        .attr("r", 3)
        .attr("fill", color(series.label) as string)
        .on("mouseover", (event, d) => {
          tooltip
            .style("opacity", 1)
            .html(`Y: ${d.y}`)
            .style("left", `${event.pageX + 10}px`)
            .style("top", `${event.pageY - 20}px`);
        })
        .on("mouseout", () => {
          tooltip.style("opacity", 0);
        });
    });

    // Centered Legend inside chart (top center)
    const legendItemWidth = 120;
    const totalLegendWidth = data.length * legendItemWidth;
    const legendX = (innerWidth - totalLegendWidth) / 2;

    const legend = g
      .append("g")
      .attr("transform", `translate(${legendX}, -30)`); // Above chart content

    data.forEach((series, i) => {
      const legendRow = legend
        .append("g")
        .attr("transform", `translate(${i * legendItemWidth}, 0)`);

      legendRow
        .append("rect")
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill", color(series.label) as string);

      legendRow
        .append("text")
        .attr("x", 15)
        .attr("y", 10)
        .text(series.label)
        .style("font-size", "12px")
        .attr("alignment-baseline", "middle");
    });
  }, [data, xTicks, height, width]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        backgroundImage: "linear-gradient(to bottom, #e1eef2, #fff)",
      }}
    >
      <svg ref={svgRef}></svg>
      <div
        ref={tooltipRef}
        style={{
          position: "absolute",
          backgroundColor: "white",
          border: "1px solid #ccc",
          padding: "5px",
          borderRadius: "3px",
          pointerEvents: "none",
          opacity: 0,
        }}
      ></div>
    </div>
  );
};

export default LineChart;
