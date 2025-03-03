
console.log("hello hello");

let pageTitle = document.querySelector("#page-title");


//Java time out Changes
setTimeout(function(){
    pageTitle.style.color ="pink"; 
}, 3000)


//click event on header changes bg color
document.querySelector("header").onclick = function() {
    console.log("timeout worked!");
    document.querySelector("body").style.backgroundColor = "black"
}