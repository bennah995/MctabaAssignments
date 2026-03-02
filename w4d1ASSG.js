function factorialIter(n) {
  let factorialResult = 1;
  if (n < 0){
    return "Error- no negative numbers, they BREAK code";
  }

  if(n === 0 || n === 1){
    factorialResult = 1;
  };

  for (let nLoop = n; nLoop > 0; nLoop--) {
    factorialResult *= nLoop;
  }

  return factorialResult;
}

const factorialRec = function rec(n){
  if (n < 0){
    return "Error- no negative numbers, they BREAK code";
  }

  if(n === 0 || n === 1){
    return 1;
  };

  return n * factorialRec(n - 1);
  
}

console.log(factorialIter(5));
console.log(factorialRec(5));
console.log(factorialIter(0));
console.log(factorialRec(0));
console.log(factorialIter(-1));
console.log(factorialRec(-1));

// console.log(factorialRec(10000));

(function() {
  console.log(factorialIter(6)); // 720
})();