alert("WELCOME TO THE CHOCOLATE WORLD");

var counter = document.querySelector(".counter");

let count = 10;
setInterval(() => {
    if (count < 3000){
        count++;
        counter.innerText = count;
    }
}, 5);

