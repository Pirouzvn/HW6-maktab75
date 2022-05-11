function starCal(arr) {
    let stars = arr[0] + arr[1] * 2 + arr[2] * 3 + arr[3] * 4 + arr[4] * 5;
    let star = stars / (arr[0] + arr[1] + arr[2] + arr[3] + arr[4])
    console.log(star.toFixed(2));
  }
  let arr02 = [55, 67, 98, 115, 61]
  starCal(arr02)