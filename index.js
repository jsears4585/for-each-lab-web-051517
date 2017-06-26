var iterativeLog = (array) => {
  array.forEach(function(el, i){
    console.log(`${i}: ${el}`);
  })
}

var iterate = (callback) => {
  var arr = ["yams", "watermelon"];
  arr.forEach(callback);
  return arr;
}

var doToArray = (array, callback) => {
  array.forEach(callback);
}
