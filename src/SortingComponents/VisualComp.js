import React, {useState} from "react"
import "../CssFiles/Visual.css";
import {generate, sort} from "./controller";

let selectedSort = ["bubbleSort"];
function VisualComp(){
    const [color, setColor] = useState(nOfElements + 1);
    const [mcolor, setmColor] = useState(nOfElements + 1);
    const [defaultColor, setDefaultColor] = useState("blue");
    const [array, setArray] = useState([]);
    const [rangeValue, setRangeValue] = useState(200);
    const [nOfElements, setSizeValue] = useState(20);

    const rectWidth = (window.innerWidth / 2) / nOfElements;
    
    // function generate(setColor,setmColor,setDefaultColor,nOfElements,setArray) {
    //   const arr = [];
    //   setColor(nOfElements + 1);
    //   setmColor(nOfElements + 1);
    //   setDefaultColor("blue");
    //   for (let i = 0; i < nOfElements; i++) {
    //     let random = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
    //     arr[i] = random;
    //   }
    //   setArray(arr);
    // }

    function whichSort(e){
      selectedSort[0] = e.target.value;
      console.log("whichsort", selectedSort[0]);
    }

    // function sort(selectedSort, setArray, setColor, setDefaultColor, setmColor, rangeValue, nOfElements, array){
    //   console.log("sort",selectedSort[0])
    //   if(selectedSort[0]==="bubbleSort"){
    //       bubbleSort(
    //         array,
    //         setArray,
    //         setColor,
    //         setmColor,
    //         rangeValue,
    //         nOfElements,
    //         setDefaultColor
    //       );
    //     }
    //   if (selectedSort[0] === "SelectionSort") {
    //     SelectionSort(
    //       array,
    //       setArray,
    //       setColor,
    //       setmColor,
    //       rangeValue,
    //       nOfElements,
    //       setDefaultColor
    //     );
    //   }
    //   if (selectedSort[0] === "InsertionSort") {
    //     InsertionSort(
    //       array,
    //       setArray,
    //       setColor,
    //       setmColor,
    //       rangeValue,
    //       nOfElements,
    //       setDefaultColor
    //     );
    //   }
    // }

    
    return (
      <div>
        <div className="nav bg-info p-2 text-dark bg-opacity-10">
          <button
            className="bt btn btn-primary"
            onClick={() =>
              generate(
                setColor,
                setmColor,
                setDefaultColor,
                nOfElements,
                setArray
              )
            }
          >
            generate
          </button>
          <button
            className="btn btn-warning"
            onClick={() =>
              sort(
                selectedSort,
                setArray,
                setColor,
                setDefaultColor,
                setmColor,
                rangeValue,
                nOfElements,
                array
              )
            }
          >
            Sort
          </button>
          <label for="customRange2" class="form-label">
            Speed :
          </label>
          <input
            value={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
            type="range"
            class="slider form-range"
            min="0"
            max="800"
          />
          <label for="customRange2" class="form-label">
            Size :
          </label>
          <input
            value={nOfElements}
            onChange={(e) => setSizeValue(e.target.value)}
            type="range"
            class="slider form-range"
            min="5"
            max="100"
          />

          <label for="cars">Choose Sorting Algo:</label>
          <select onChange={(e) => whichSort(e)} name="sort" id="sorting">
            <option value="bubbleSort">bubbleSort</option>
            <option value="SelectionSort">SelectionSort</option>
            <option value="InsertionSort">InsertionSort</option>
          </select>
        </div>
        {/* <button onClick={() => stop()}>Stop</button> */}
        <svg
          transform={`translate(${window.innerWidth / 2 -
            (rectWidth * nOfElements) / 2},0)`}
          width={window.innerWidth}
          height={window.innerHeight}
        >
          {array.map((item, i) => (
            <rect
              className="rect"
              key={i}
              fill={color === i ? "red" : i === mcolor ? "green" : defaultColor}
              x={rectWidth * i}
              width={rectWidth}
              height={item * 3.7}
              style={{ stroke: "black" }}
            />
          ))}
        </svg>
      </div>
    );
}

export default VisualComp;
       