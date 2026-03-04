// a funtion to merge arrays
function mergeArrays(a, b){
  const merged = [...a, ...b];
  return merged;
}

console.log(mergeArrays(
  a = [1, 2], 
  b=[3, 4]));


  // greetings function
function createGreeting(name = "Guest", greeting = "Hello"){
  return `${greeting}, ${name}!`;
}

console.log(createGreeting());
console.log(createGreeting("Benard"));
console.log(createGreeting("Benard", "Jambo"));


// total price funtion
function calculateTotal(price, tax = 0.16){
  let totalPrice = price + (tax * price);
  return totalPrice;
}

console.log(calculateTotal(100));
console.log(calculateTotal(100, 0.2));
