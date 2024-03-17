/*===========================================writing animation=====================================*/

var typed=new Typed(".typing",{
  strings:["","Web Developer","web Designer","Data Analyst","API Developer",".net Developer",],
  typeSpeed:100,
  BackSpeed:60,
  loop:true
})


/*===========================================Aside=====================================*/
const nav=document.querySelector(".nav");
const navList=nav.querySelectorAll("li");
const allSection=document.querySelectorAll(".section")
totalNavList=navList.length;
for(var i=0;i<totalNavList;i++){
   const anchor= navList[i].querySelector("a")
   anchor.addEventListener("click",function(){
    
    for(var k=0;k<allSection.length;k++)
    {
      allSection[k].classList.remove("back-section")
    }


    for(var j=0;j<totalNavList;j++)
    {
      if(navList[j].querySelector("a").classList.contains("active"))
      {
        allSection[j].classList.add("back-section")
      }
      const anchor= navList[j].querySelector("a")
      anchor.classList.remove("active")         
    }
        this.classList.add("active")
        showData(this)
        if(window.innerWidth<1200){
          asideSectionNavTogglerButton()
        }
   })
}

function showData(element){
  for(var i=0;i<allSection.length;i++){
    allSection[i].classList.remove("active")
  }
 const target=element.getAttribute("href").split("#")[1]
 document.querySelector("#"+target).classList.add("active")

}

function updateNav(element){
  for(let i=0;i<totalNavList;i++){
    navList[i].querySelector("a").classList.remove("active")
    const target=document.getAttribute("href").split('#')[1];
    if(target===navList[i].querySelector("a").getAttribute("href").split("#")[1]){
      navList[i].querySelector("a").classList.add("active")
    }
  }
}

document.querySelector(".hire-me").addEventListener("click",function(){
    showData(this)
    updateNav(this)
})

const navTogglerButton=document.querySelector(".nav-toggler");
  const aside=document.querySelector(".aside");
  navTogglerButton.addEventListener("click",()=>{
    asideSectionNavTogglerButton()
  })


 function asideSectionNavTogglerButton(){
  aside.classList.toggle("open")
  navTogglerButton.classList.toggle("open")
  for(let i=0;i<allSection.length;i++){
    allSection[i].classList.toggle("open")
  }
 }