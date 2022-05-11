let arr = [
    [1, 2],
    [5, 6],
    [0, 0],
    [3, 4]
  ]
  
  function squareArr(arr) {
  
    if (arr.length === arr[0].length) {
      return console.log("this is square matrices");
    } else if (arr.length < arr[0].length) {
      console.log("this is not squre");
      let i = arr[0].length - arr.length
      let j = arr[0].length
      for (i; i > 0; i--) {
        let arrRow = []
        for (j; j > 0; j--) {
          arrRow.push(0)
        }
        arr.push(arrRow)
      }
      console.log(arr);
    } else if (arr.length > arr[0].length) {
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        for (let j = arr.length - arr[0].length; j > 0; j--) {
          console.log(j, i);
          console.log(arr[i].push(0));
        }
      }
      console.log(arr);
    }
  }
  squareArr(arr)