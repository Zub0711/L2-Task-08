// Compulsory Task 1
// In this task I will be creating a function to fetch and log a api lnk

// So first I start off by creating a function called api
// Then I use async to make the function async
// I the define the variable url by using await and fetch method to fetch the url
// The log to console and finally I log the function to console

const api = async () => {
  let cat = await fetch("https://cdn2.thecatapi.com/images/MTg5NTY1Nw.gif");
  console.log(cat.url);
};
console.log(api());
