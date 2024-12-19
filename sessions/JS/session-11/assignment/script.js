import { Employee, SalesPerson, WorkerBee, Engineer } from "./module.js";

const emp1 = new Employee("Mohamed", "IT");
const emp2 = new Employee("Mahmoud", "Sales");
console.log(emp1);

const sales = new SalesPerson(
  "Mohamed",
  "Sales",
  ["project1", "project2"],
  200
);
console.log(sales);

const wb = new WorkerBee("Ahmed", "Bee", [emp1, emp2]);
console.log(wb);

const eng = new Engineer(
  "Ali",
  "Engineering",
  ["project1", "project2"],
  "3D Printer"
);
console.log(eng);

// ==============================================

/* 
Use fetch to get all User From 
https://jsonplaceholder.typicode.com/users  
// a. Then get all posts for each user using async function from 
// https://jsonplaceholder.typicode.com/users/${userid}/posts  
// b. Then Display to page as order list 
*/

const users = await fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((data) => data);

function displayUserData(data) {
  const userDataDiv = document.getElementById("users-posts");
  userDataDiv.innerHTML = "";
  for (const user in data) {
    userDataDiv.innerHTML += `<h2>${user} Posts:</h2>`;
    const userPosts = data[user];
    const list = document.createElement("ul");
    for (const post of userPosts) {
      const listItem = document.createElement("li");
      listItem.textContent = post.title;
      list.appendChild(listItem);
    }
    userDataDiv.appendChild(list);
  }
}

async function getUsersPosts() {
  let usersPosts = {};
  for (const user of users) {
    await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
      .then((data) => data.json())
      .then((data) => (usersPosts[user.name] = data));
  }
  displayUserData(usersPosts);
}

getUsersPosts();
