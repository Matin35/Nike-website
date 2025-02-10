const newMenu = document.getElementById("new")
const newSubMenu = document.getElementById("newSubMenu")
newMenu.addEventListener("mouseover", ()=>{
    newSubMenu.setAttribute("class","newSubMenu newHover")
})
newSubMenu.addEventListener("mouseover", ()=>{
    newSubMenu.setAttribute("class","newSubMenu newHover")
})
addEventListener("mouseout", ()=>{
    newSubMenu.setAttribute("class","newSubMenu")
})
const menMenu = document.getElementById("men")
const menSubMenu = document.getElementById("menSubMenu")
menMenu.addEventListener("mouseover", ()=>{
    menSubMenu.setAttribute("class","menSubMenu menHover")
})
menSubMenu.addEventListener("mouseover", ()=>{
    menSubMenu.setAttribute("class","menSubMenu menHover")
})
addEventListener("mouseout", ()=>{
    menSubMenu.setAttribute("class","menSubMenu")
})
const womenMenu = document.getElementById("women")
const womenSubMenu = document.getElementById("womenSubMenu")
womenMenu.addEventListener("mouseover", ()=>{
    womenSubMenu.setAttribute("class","womenSubMenu womenHover")
})
womenSubMenu.addEventListener("mouseover", ()=>{
    womenSubMenu.setAttribute("class","womenSubMenu womenHover")
})
addEventListener("mouseout", ()=>{
    womenSubMenu.setAttribute("class","womenSubMenu")
})
const kidsMenu = document.getElementById("kids")
const kidsSubMenu = document.getElementById("kidsSubMenu")
kidsMenu.addEventListener("mouseover", ()=>{
    kidsSubMenu.setAttribute("class","kidsSubMenu kidsHover")
})
kidsSubMenu.addEventListener("mouseover", ()=>{
    kidsSubMenu.setAttribute("class","kidsSubMenu kidsHover")
})
addEventListener("mouseout", ()=>{
    kidsSubMenu.setAttribute("class","kidsSubMenu")
})
const jordanMenu = document.getElementById("jordan")
const jordanSubMenu = document.getElementById("jordanSubMenu")
jordanMenu.addEventListener("mouseover", ()=>{
    jordanSubMenu.setAttribute("class","jordanSubMenu jordanHover")
})
jordanSubMenu.addEventListener("mouseover", ()=>{
    jordanSubMenu.setAttribute("class","jordanSubMenu jordanHover")
})
addEventListener("mouseout", ()=>{
    jordanSubMenu.setAttribute("class","jordanSubMenu")
})
const menuButton = document.getElementById("menuButton")
const rightMenu = document.getElementById("rightMenu")
menuButton.addEventListener("click", ()=>{
    let winHeight = window.innerHeight
    rightMenu.style.maxHeight = `${winHeight}px`
    rightMenu.style.right = `0`
})
const exitButton = document.getElementById("exitButton")
exitButton.addEventListener("click", ()=>{
    setTimeout(()=>{
        rightMenu.style.right = `-100%`
    },300)
})
// const heartIcon = document.getElementById("heart-icon")
// let innerWidth = window.innerWidth
// while (innerWidth <= "992"){
//     if (heartIcon.getAttribute('src') === "./src/images/heart-icon.svg"){
//         heartIcon.setAttribute('src', "./src/images/contactIcon.svg")
//         break
//     }
// }
// while (innerWidth > "992"){
//     if (heartIcon.getAttribute('src') === "./src/images/contactIcon.svg"){
//         heartIcon.setAttribute('src', "./src/images/heart-icon.svg")
//         break
//     }
// }


















