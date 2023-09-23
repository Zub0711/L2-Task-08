// Compulsory Task 1
// In this task I will be creating a function to fetch and log a api lnk

// So first I start off by creating a function called api and use the async method
const api = async () => {
// I the define the variable url by using await and fetch method to fetch the url
  let cat = await fetch("https://cdn2.thecatapi.com/images/MTg5NTY1Nw.gif");
// The log to console and finally I log the function to console
  console.log(cat.url);
};
console.log(api());
