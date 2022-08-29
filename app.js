const waist = document.querySelector(".waist");
const height = document.querySelector(".height");
const calculate = document.querySelector(".calculate");
const result = document.querySelector(".result");


function calculateFunc() {
   return waist.value / height.value;
}

calculate.onclick = function() {
    if (waist.value == 0 || height.value == 0) {
      result.innerText = "please try again";
    } else {
      result.innerText = calculateFunc().toFixed(2);
    }
}
