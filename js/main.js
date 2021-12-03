var menu=document.querySelector(".menu");
var side=document.querySelector(".side-nav");
var progress=document.querySelector(".progress");
// var icons=document.querySelectorAll(".side-nav .si");
// icons.forEach((i)=>{
//     i.onclick=()=>{
//         console.log("");
//     }
    
// })

let menuOpen=false;
menu.addEventListener("click",()=>{
    side.classList.toggle("active-side");
    if(!menuOpen){
    menu.classList.add("open");
    menuOpen=true;}
    else{
        menu.classList.remove("open");
        menuOpen=false
    }

})

window.onscroll=()=>{
    console.log(scrollY);
    if(window.scrollY>=300){
        progress.classList.add("pactive");
    }else{
        progress.classList.remove("pactive");
    }
}
progress.addEventListener("click",()=>{
    window.scrollTo(0,0)
})