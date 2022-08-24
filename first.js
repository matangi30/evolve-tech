//alert("hello");
var btn = document.querySelector("#done");
console.log("btn");
var txtage = document.querySelector("#txt-age");
//console.log(txtage);
var txtcard = document.querySelector("#txt-card");
//console.log(txtage);

function clickeventhandle() {
    if (txtage.value >= 18 && txtcard.value == "yes") {
        alert("You can vote");
    }
    else {
        alert("You can not vote!");
    }
};
btn.addEventListener("click", clickeventhandle);
