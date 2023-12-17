const tagP = document.createElement('p');
tagP.style.color = "red";
tagP.textContent = "Hey I'm red!";

const tagH = document.createElement('h3');
tagH.textContent = "Hey I'm Blue h3!";
tagH.style.color = "blue";

const tagDiv = document.createElement('div');
tagDiv.style.cssText = "background-color: pink;"
tagDiv.style.border = '2px solid blue';

const newtagP = document.createElement('p');
newtagP.textContent = "I'm in a diV";
tagDiv.appendChild(newtagP);

const newtagH3 = document.createElement('h3');
newtagH3.textContent = "ME TOO!";
tagDiv.appendChild(newtagH3);

const btn1 = document.querySelector('#btn1');
btn1.onclick = () => alert("Hello World");

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello World");
});

function alertFunction() {
    alert("Yay! that's sweet of you!");
};

function alertFunction2() {
    alert("Yay! that's sweet of you!");
}
const btn2 = document.querySelector('#btn2')
btn2.onclick = alertFunction2;

function alertFunction3() {
    alert("Yay! that's sweet of you!");
}
btn3.addEventListener('click', alertFunction3);

//function alertFunction4() {
//    alert("we keep learning");
//}
//btn4.addEventListener('click', function (e) {
//    console.log(e);
//});

//function alertFunction4() {
//    alert("we keep learning");
//}
//btn4.addEventListener('click', function (e) {
//    console.log(e.target);
//});
function alertFunction4() {
    alert("we keep learning");
}
btn4.addEventListener('click', alertFunction4);

btn4.addEventListener('click', function (e) {
    e.target.style.background = 'pink';
});

// attaching listeners to groups of nodes

function alertFunction5() {
    alert("We keep growing");
}
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
        alertFunction5();
    });
});