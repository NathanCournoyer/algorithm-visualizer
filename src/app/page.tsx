"use client";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        
        <div id="graph" className="flex flew-row items-end x1 w-2/4"></div>
        

        <ol className="font-mono text-sm/6 text-center sm:text-left">
          <li className=" mb-2 ">
               
            <div className="flex flex-row gap-[16px] ">
              1. Select a sorting algorithm.
            <menu className="">
              <select className="" name="Test" id="algo">
                <option className="text-black">Binary Search</option>
                <option className="text-black">2</option>
              </select>
            </menu>
            </div>
            
          </li>
          <li className="">
            2. Generate a visualization
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            onClick={onGenerateVisualization}
          >
            Generate
          </button>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://github.com/NathanCournoyer/algorithm-visualizer"
          >
            Read our docs
          </a>
        </div>
      </main>
    </div>
  );

  function onGenerateVisualization() {

    const graph : HTMLElement | null = document.getElementById("graph")
    if (graph !== null) { 
      graph.innerHTML = ""

      const graphWidth = graph.offsetWidth            
      const dataSetSize = graphWidth / 5 // Temporary ratio

      for (let i = 0; i < dataSetSize; i++) {
        const nodeWidth = (graphWidth / dataSetSize).toString() + "px"
        const randomNumber = Math.floor(Math.random() * 101 + 1).toString() + "px"
        const nodeId = i.toString()
        const node: HTMLElement = generateDataPointNode(randomNumber, nodeWidth, nodeId)
        graph.appendChild(node)
      }
    } 
  }

  function generateDataPointNode(height: string, width: string, nodeId: string) {
    const node : HTMLElement = document.createElement("div")
    node.style.height = height
    node.style.width = width
    node.style.paddingLeft = "5%"
    node.style.backgroundColor = "yellow"
    node.id = nodeId 
      
    return node
  }
}


