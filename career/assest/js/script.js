// tabs to give active class to them
const tab1 = document.querySelector("#tab1");
const tab2 = document.querySelector("#tab2");
const tab3 = document.querySelector("#tab3");

// links for disable class
const a1 = document.querySelector("#tab1 a");
const a2 = document.querySelector("#tab2 a");
const a3 = document.querySelector("#tab3 a");

// buttons to set event listeners
const buttons1 = document.querySelector("#button1");
const buttons2 = document.querySelector("#button2");
const buttons3 = document.querySelector("#button3");



// forms to hide or show
const form1 = document.querySelector("#form1");
const form2 = document.querySelector("#form2");
const form3 = document.querySelector("#form3");


// event listeners
buttons1.addEventListener("click", () => {
    form1_Validate()

})
buttons2.addEventListener("click", () => {
    form2_Validate()

})

buttons3.addEventListener("click", () => {
    form3_Validate()
})






// get 6 params and then  remove active  class of tabs  and add disable class to them
function classManagerRemoveActive(elem1, elem2, elem3, elem4) {
    elem1.classList.remove("active")
    elem2.classList.remove("active")
    elem3.classList.add("disabled")
    elem4.classList.add("disabled")

}
// get 2 params  and then add active  class
function classManagerAddActive(elem1, elem2) {
    elem1.classList.add("active")
    elem2.classList.remove("disabled")

}
// get 3 forms and then show the last parametr and hide others
function formManager(form1, form2, form3) {
    form1.hidden = true
    form2.hidden = true
    form3.hidden = false

}