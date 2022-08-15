
const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

async function SelectionSort(
  array,
  setArray,
  setColor,
  setmColor,
  rangeValue,
  n,
  setDefaultColor
) {
  let arr = [...array];
  console.log("pressed");
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      setmColor(j);
      setArray(arr);
      await sleep(rangeValue);
      if (arr[j] < arr[min]) {
        min = j;
        setColor(min);
      }
    }
    if (min != i) {
      let tmp = arr[i];
      setColor(i);
      arr[i] = arr[min];
      arr[min] = tmp;
    }
    arr = [...arr];
  }
  setDefaultColor("pink");
  setColor("pink");
  setmColor("pink");
}

async function bubbleSort(
  array,
  setArray,
  setColor,
  setmColor,
  rangeValue,
  n,
  setDefaultColor
) {
  let arr = [...array];
  console.log("pressed");
  for (let j = n - 1; j > 0; j--) {
    console.log(j);
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        setmColor(i + 1);
        arr[i + 1] = temp;
        setColor(i);
      }
      arr = [...arr];
      setColor(i);
      setArray(arr);
      await sleep(rangeValue);
    }
  }
  setDefaultColor("pink");
  setColor("pink");
  setmColor("pink");
}
async function InsertionSort(
  array,
  setArray,
  setColor,
  setmColor,
  rangeValue,
  n,
  setDefaultColor
) {
  let arr = [...array];
  console.log("pressed");
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = arr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      setmColor(j);
      j--;
      setArray(arr);
      await sleep(rangeValue);
    }
    arr[j + 1] = current;
    arr = [...arr];
    setColor(i);
  }
  setDefaultColor("pink");
  setColor("pink");
  setmColor("pink");
}



export {SelectionSort, InsertionSort, bubbleSort};