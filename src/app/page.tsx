"use client";

import React, { useState } from "react";

const DATA_POINT_WIDTH_FACTOR = 5; 

export default function Home() {
  const [selectedAlgorithm, setSelectedAlgo] = useState("binary, sorted");

  return (
    <div className="font-sans w-full flex flex-col items-center justify-center min-h-screen gap-16">
        <div className=" flex flex-row justify-center w-2/4 sm:w-2/4">
          <div 
            id="graph" 
            className="flex flex-row flex-nowrap justify-center w-full items-end mx-auto"
          ></div>
        </div>
        

        <ol className=" flex flex-col justify-center mx-auto font-mono text-sm/6 text-center sm:text-left">
          <li className="mb-2 ">
            <div className="flex flex-row gap-[16px] w-full">
              1. Select a sorting algorithm.
            <menu>
              <select 
                id="algo"
                value={selectedAlgorithm}
                onChange={e => setSelectedAlgo(e.target.value)}>
                <option value={"binary, sorted"} className="text-black bg-gray-800">Binary Search</option>
                <option value={"random"} className="text-black bg-gray-800">Second Option</option>
              </select>
            </menu>
            </div>
            
          </li>
          <li className="">
            2. Generate a visualization
          </li>
        </ol>

        <div className=" flex gap-4 items-center flex-col sm:flex-row">
          <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            onClick={() => {onGenerateVisualization(selectedAlgorithm)}}
          >
            Generate
          </button>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://github.com/NathanCournoyer/algorithm-visualizer"
          >
            About me
          </a>
        </div>
      
    </div>
  );
}

  function onGenerateVisualization(algoSelect: string) {
    const graph : HTMLElement | null = document.getElementById("graph")

    if (graph !== null) { 
      graph.innerHTML = ""

      const graphWidth = graph.offsetWidth            
      const dataSetSize = graphWidth / DATA_POINT_WIDTH_FACTOR
      const hasToBeSorted = algoSelect.includes("sorted") ?? false

      let nodeValue = "0"
      for (let i = 0; i < dataSetSize; i++) {
        const nodeWidth = (graphWidth / dataSetSize).toString() + "px"
        if (hasToBeSorted === false) {
          nodeValue = generateRandomNumber(1, 100).toString() + "px"
        } else {    
          nodeValue = generateRandomNumber(i, 100).toString() + "px" 
        }
        
        const nodeId = i.toString()
        const node: HTMLElement = generateDataPointNode(nodeValue, nodeWidth, nodeId)
        
        if (node !== null ) {
          graph.appendChild(node)
        } 
      } 
  }

  function generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateDataPointNode(height: string, width: string, nodeId: string) {
    const node : HTMLElement = document.createElement("div")
    
    node.style.height = height
    node.style.width = width
    node.style.backgroundColor = "yellow"
    node.id = nodeId 
      
    return node
  }
}


