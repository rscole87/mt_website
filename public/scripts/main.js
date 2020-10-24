let mobileMenuBttn = document.getElementById("mobile-menu-bttn");
let nav = document.getElementById("main-nav");


mobileMenuBttn.addEventListener("click", () =>{
   slideIn(nav);
});


// const toggleVisability = (element) =>{
//     if(element.style.display === ""){
//         element.style.display = "block";
//     } else {
//         element.style.display = "";
//     }
// }

const slideIn = (element) =>{
    if(element.style.maxHeight === "0px" || (element.style.maxHeight !== null && element.style.maxHeight !== "220px")){
        element.style.maxHeight = "220px";
    } else {
        element.style.maxHeight = "0px";
    }
}