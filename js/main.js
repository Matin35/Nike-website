const newMenu = document.getElementById("new")
const newSubMenu = document.getElementById("newSubMenu")
newMenu.addEventListener("mouseover", ()=>{
    newSubMenu.setAttribute("class","newSubMenu newHover")
    newSubMenu.style.zIndex = "1"
})
newSubMenu.addEventListener("mouseover", ()=>{
    newSubMenu.setAttribute("class","newSubMenu newHover")
    newSubMenu.style.zIndex = "1"
})
addEventListener("mouseout", ()=>{
    newSubMenu.setAttribute("class","newSubMenu")
    newSubMenu.style.zIndex = "-100"
})
const menMenu = document.getElementById("men")
const menSubMenu = document.getElementById("menSubMenu")
menMenu.addEventListener("mouseover", ()=>{
    menSubMenu.setAttribute("class","menSubMenu menHover")
    menSubMenu.style.zIndex = "1"
})
menSubMenu.addEventListener("mouseover", ()=>{
    menSubMenu.setAttribute("class","menSubMenu menHover")
    menSubMenu.style.zIndex = "1"
})
addEventListener("mouseout", ()=>{
    menSubMenu.setAttribute("class","menSubMenu")
    menSubMenu.style.zIndex = "-100"
})
const womenMenu = document.getElementById("women")
const womenSubMenu = document.getElementById("womenSubMenu")
womenMenu.addEventListener("mouseover", ()=>{
    womenSubMenu.setAttribute("class","womenSubMenu womenHover")
    womenSubMenu.style.zIndex = "0"
})
womenSubMenu.addEventListener("mouseover", ()=>{
    womenSubMenu.setAttribute("class","womenSubMenu womenHover")
    womenSubMenu.style.zIndex = "0"
})
addEventListener("mouseout", ()=>{
    womenSubMenu.setAttribute("class","womenSubMenu")
    womenSubMenu.style.zIndex = "-100"
})
const kidsMenu = document.getElementById("kids")
const kidsSubMenu = document.getElementById("kidsSubMenu")
kidsMenu.addEventListener("mouseover", ()=>{
    kidsSubMenu.setAttribute("class","kidsSubMenu kidsHover")
    kidsSubMenu.style.zIndex = "0"
})
kidsSubMenu.addEventListener("mouseover", ()=>{
    kidsSubMenu.setAttribute("class","kidsSubMenu kidsHover")
    kidsSubMenu.style.zIndex = "0"
})
addEventListener("mouseout", ()=>{
    kidsSubMenu.setAttribute("class","kidsSubMenu")
    kidsSubMenu.style.zIndex = "-100"
})
const jordanMenu = document.getElementById("jordan")
const jordanSubMenu = document.getElementById("jordanSubMenu")
jordanMenu.addEventListener("mouseover", ()=>{
    jordanSubMenu.setAttribute("class","jordanSubMenu jordanHover")
    jordanSubMenu.style.zIndex = "0"
})
jordanSubMenu.addEventListener("mouseover", ()=>{
    jordanSubMenu.setAttribute("class","jordanSubMenu jordanHover")
    jordanSubMenu.style.zIndex = "0"
})
addEventListener("mouseout", ()=>{
    jordanSubMenu.setAttribute("class","jordanSubMenu")
    jordanSubMenu.style.zIndex = "-100"
})
const menuButton = document.getElementById("menuButton")
const rightMenu = document.getElementById("rightMenu")
menuButton.addEventListener("click", ()=>{
    rightMenu.style.display= "flex"
    let winHeight = window.innerHeight
    rightMenu.style.maxHeight = `${winHeight}px`
    rightMenu.style.right = `0`
})
const exitButton = document.getElementById("exitButton")
exitButton.addEventListener("click", ()=>{
    setTimeout(()=>{
        rightMenu.style.right = `-100%`
    },300)
    setTimeout(()=>{
        rightMenu.style.display = "none"
    }, 450)
})



// header js ---------------------------------------------------------------------------------------------------------------------------------------------------

const featuredBtn = document.getElementById("featuredBtn")
const featuredMenu = document.getElementById("featuredMenu")
featuredBtn.addEventListener("click", ()=>{
    if (window.innerWidth < 559){
        if (featuredMenu.style.maxHeight === "0px") {
            featuredMenu.style.maxHeight = "380px"
            shoesMenu.style.maxHeight = "0"
            clothMenu.style.maxHeight = "0"
            kidMenu.style.maxHeight = "0"

        }else{
            featuredMenu.style.maxHeight = "0"
        }
    }
})

const shoesBtn = document.getElementById("shoesBtn")
const shoesMenu = document.getElementById("shoesMenu")
shoesBtn.addEventListener("click", ()=>{
    if (window.innerWidth < 559){
        if (shoesMenu.style.maxHeight === "0px") {
            shoesMenu.style.maxHeight = "380px"
            featuredMenu.style.maxHeight = "0"
            clothMenu.style.maxHeight = "0"
            kidMenu.style.maxHeight = "0"
        }else{
            shoesMenu.style.maxHeight = "0"
        }
    }
})

const clothBtn = document.getElementById("clothBtn")
const clothMenu = document.getElementById("clothMenu")
clothBtn.addEventListener("click", ()=>{
    if (window.innerWidth < 559){
        if (clothMenu.style.maxHeight === "0px") {
            clothMenu.style.maxHeight = "540px"
            featuredMenu.style.maxHeight = "0"
            shoesMenu.style.maxHeight = "0"
            kidMenu.style.maxHeight = "0"
        }else{
            clothMenu.style.maxHeight = "0"
        }
    }
})

const kidBtn = document.getElementById("kidBtn")
const kidMenu = document.getElementById("kidMenu")
kidBtn.addEventListener("click", ()=>{
    if (window.innerWidth < 559){
        if (kidMenu.style.maxHeight === "0px") {
            kidMenu.style.maxHeight = "380px"
            featuredMenu.style.maxHeight = "0"
            shoesMenu.style.maxHeight = "0"
            clothMenu.style.maxHeight = "0"
        }else{
            kidMenu.style.maxHeight = "0"
        }
    }
})






const resourcesBtn = document.getElementById("resourcesBtn")
const menuResources = document.getElementById("menuResources")
resourcesBtn.addEventListener("click", ()=>{
    if (window.innerWidth < 960){
        if (menuResources.style.maxHeight === "150px"){
            menuResources.style.maxHeight = "0"
        }else{
            menuResources.style.maxHeight = "150px"
        }
    }
})

const helpBtn = document.getElementById("helpBtn")
const menuHelp = document.getElementById("menuHelp")
helpBtn.addEventListener("click", ()=>{
    if (window.innerWidth < 960){
        if (menuHelp.style.maxHeight === "270px"){
            menuHelp.style.maxHeight = "0"
        }else{
            menuHelp.style.maxHeight = "270px"
        }
    }
})





const companyBtn = document.getElementById("companyBtn")
const menuCompany = document.getElementById("menuCompany")
companyBtn.addEventListener("click", ()=>{
    if (window.innerWidth < 960){
        if (menuCompany.style.maxHeight === "250px"){
            menuCompany.style.maxHeight = "0"
        }else{
            menuCompany.style.maxHeight = "250px"
        }
    }
})





const promotionBtn = document.getElementById("promotionBtn")
const menuPromotion = document.getElementById("menuPromotion")
promotionBtn.addEventListener("click", ()=>{
    if (window.innerWidth < 960){
        if (menuPromotion.style.maxHeight === "190px"){
            menuPromotion.style.maxHeight = "0"
        }else{
            menuPromotion.style.maxHeight = "190px"
        }
    }
})





























