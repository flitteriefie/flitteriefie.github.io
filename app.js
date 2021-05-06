let count = 0;

const value = document.querySelector("#value");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    count = getRandomNumber();
    value.textContent = count;
})




function getRandomNumber() {
    return Math.floor(Math.random() * 1000);
}

