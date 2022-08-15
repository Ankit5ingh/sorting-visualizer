import { SelectionSort, bubbleSort, InsertionSort } from "./SortingAlgos";

const min = 10;
const max = 120;

function generate(setColor, setmColor, setDefaultColor, nOfElements, setArray) {
  const arr = [];
  setColor(nOfElements + 1);
  setmColor(nOfElements + 1);
  setDefaultColor("blue");
  for (let i = 0; i < nOfElements; i++) {
    let random = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
    arr[i] = random;
  }
  setArray(arr);
}

function sort(
  selectedSort,
  setArray,
  setColor,
  setDefaultColor,
  setmColor,
  rangeValue,
  nOfElements,
  array
) 
{
  console.log("sort", selectedSort[0]);
  if (selectedSort[0] === "bubbleSort") {
    bubbleSort(
      array,
      setArray,
      setColor,
      setmColor,
      rangeValue,
      nOfElements,
      setDefaultColor
    );
  }
  if (selectedSort[0] === "SelectionSort") {
    SelectionSort(
      array,
      setArray,
      setColor,
      setmColor,
      rangeValue,
      nOfElements,
      setDefaultColor
    );
  }
  if (selectedSort[0] === "InsertionSort") {
    InsertionSort(
      array,
      setArray,
      setColor,
      setmColor,
      rangeValue,
      nOfElements,
      setDefaultColor
    );
  }
}

export { generate, sort };
