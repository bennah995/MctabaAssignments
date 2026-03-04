// must-visit destinations
function myDestination(username = "Traveller", ...cities){
  const mustVisit = ["Paris", "Tokyo", "New York"];
  const allCities = [...mustVisit, ...cities];

  return `${username}'s favorite destinations are: ${allCities.join(", ")}`;
}
// console.log(myDestination("Benard", "Nairobi", "Tanzania"));
// console.log(myDestination());


// hobbies
function listHobbies(userName = "Person", ...hobbies){
  const mainHobbies = ["reading", "coding", "drawing"];
  const allHobbies = [...mainHobbies, ...hobbies];

  return `${userName}'s hobbies are: ${allHobbies.join(", ")}`;
}
// console.log(listHobbies("Alice", "cycling", "swimming"));
// console.log(listHobbies());


// favorite foods
function favoriteFoods(username = "Foodie", ...extraFoods){
  const mainFoods = ["Pizza", "Burger", "Pasta"];
  const allfoods = [...mainFoods, ...extraFoods];

  return `${username}'s favorite foods are: ${allfoods.join(", ")}`;
}
console.log(favoriteFoods("Bob", "Sushi", "Ice Cream"));
console.log(favoriteFoods());
