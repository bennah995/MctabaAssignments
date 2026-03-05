// Task 1: Greeting Generator
function greetingGenerator(phrase){
  return function(name){
    console.log(`${phrase}, ${name}!`)
  }
}
const greet = greetingGenerator("Hello")
greet("Brian");
greet("Fatima");


// Task 2: Score tracker
function requirements(){
  let score = 0;

  return {
    count(mark){
      score += mark
      console.log(score)
    }
  }
}
const total = requirements()
total.count(1)
total.count(10);
total.count(25);
total.count(40);

// Task 3: School Information (lexical scope)
let school = "Moringa School"

function courseInfo(){
  let course = "Software Engineering";
  
  function studentInfo(){
    console.log(`School: ${school}`)
    console.log(`Course: ${course}`)
  }
  studentInfo()
}
courseInfo()