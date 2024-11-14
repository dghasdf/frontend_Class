let arr = [4, 2, 3, 1];

const bubblesort = (arr) => {
  for (let i = 0; i < arr.lenght - 1; i++) {
    for (let j = 0; j < arr.lenght - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

console.log("==== 배열 전 ====");
console.log(arr);

bubblesort(arr);

console.log("==== 배열 후 ====");
console.log(arr);
