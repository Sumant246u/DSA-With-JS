// Approach -1 Using predefined map() method
const users = [
  { id: 1, name: "Sumant" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Amit" }
];

const names = users.map(user=>user.name);
console.log(names);

// Approach -2 Using for loop
function getNames(arr){
  const result = [];
  for(let i=0; i<arr.length;i++){
    result.push(arr[i].name);
  }
  return result;
}
console.log(getNames(users));