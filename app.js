let toggle = document.querySelector("#toggle")
let amount1= document.querySelector(".amount1")
let amount2= document.querySelector(".amount2")
let amount3 = document.querySelector(".amount3")

console.log(toggle);

toggle.addEventListener("click", (e) => {
    let isChecked = e.target.checked
    console.log(e);
    console.log(Boolean(isChecked));

    if (!isChecked) {
      amount1.textContent=199.99
      amount2.textContent=249.99
      amount3.textContent=399.99
    } else {
        amount1.textContent = 19.99;
        amount2.textContent = 24.99;
        amount3.textContent = 39.99;
    }
    // amount1.textContent=19.99
    // amount2.textContent=24.99
    // amount3.textContent=399.99
})