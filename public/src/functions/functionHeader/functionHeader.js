
import data from "../../data/cvinfo"
import dataSpanish from "../../data/cvinfo_spanish"
import { apagarFooter, encenderFooter } from "../../utils/plugfooter/plugfooter"
import { apagarHeader } from "../../utils/plugheader/plugHeader"
import { apagarMain } from "../../utils/plugmain/plugmain"
import { createDivMenu, divMenu } from "../divMenu/divmenu"
import { createFooter } from "../functionFooter/functionFooter"
import { createHero } from "../functionHero/functionHero"
import { createProjects } from "../functionProjects/functionProjects"
import { createPersonalInfo } from "../funPersonal/funPersonal"
import "./Header.css"



export const header = document.createElement("header")
let isSpanish = false;
export const createHeader = () =>{
header.innerHTML =""
  const h1 = document.createElement("h1")
  const imgSpain= document.createElement("img")
  const imgEnglish = document.createElement("img")
  const ul= document.createElement("ul")
  const l1 = document.createElement("li")
  const a1 = document.createElement("a")
  const l2 = document.createElement("li")
  const a2 = document.createElement("a")
  const l4 = document.createElement("li")
  const a4 = document.createElement("a")

  const imgmenu = document.createElement("img")

  
    h1.textContent = data.name
    a1.textContent = "About me"
    a2.textContent = "Personal"
    a4.textContent = "Projects"
    imgmenu.src = "https://res.cloudinary.com/dnju3aw4b/image/upload/v1704119514/hbomax/menuIcon_m2numx.png"
    imgmenu.classList.add("imgmenu")
  
    a1.classList.add("anchors")
    a2.classList.add("anchors")
    a4.classList.add("anchors")
  
    imgEnglish.src = "/public/assets/reino-unido.png"
    imgSpain.src = "/public/assets/espana.png"
  
    imgEnglish.classList.add("imgEnglish")
    imgSpain.classList.add("imgSpain")
    
    document.body.appendChild(header)
    header.appendChild(h1)
    header.appendChild(ul)
    ul.append(imgEnglish, imgSpain)
    ul.appendChild(l1)
    ul.appendChild(l2)
    ul.appendChild(l4)
    l1.appendChild(a1)
    l2.appendChild(a2)
    l4.appendChild(a4)
    header.append(imgmenu)
  


 


a1.addEventListener("click",()=>{
  if(!isSpanish){
    createHero(data)
    encenderFooter()
  }else{
    createHero(dataSpanish)
    encenderFooter() 
  }

} )
a2.addEventListener("click",()=>{
  if(!isSpanish){
  createPersonalInfo(data)
  encenderFooter()
  }else{
    createPersonalInfo(dataSpanish)
    encenderFooter()
  }
})

a4.addEventListener("click",()=>{
  if(!isSpanish){
  createProjects(data)
  encenderFooter()
  }else{
    createProjects(dataSpanish)
    encenderFooter()
  }
})


  imgmenu.addEventListener("click", () =>{
          imgmenu.style.display="none"
       
        divMenu.classList.add("shown")
        createDivMenu(imgmenu)
        apagarFooter()
        apagarHeader()
        apagarMain()

  })
  imgEnglish.addEventListener("click", () =>{
    imgEnglish.style.display="none"
    imgSpain.style.display="flex"
    isSpanish = false;
    changeAnchorsHeader(a1,a2,a4,data)
    createFooter(data)
    createPersonalInfo(data)
    createHero(data)
    
  })
  imgSpain.addEventListener("click", () =>{
    
    imgSpain.style.display = "none"; 
    imgEnglish.style.display = "flex"; 
    imgEnglish.src ="/public/assets/reino-unido.png"
    isSpanish = true;
    changeAnchorsHeader(a1,a2,a4,dataSpanish)
    createFooter(dataSpanish); 
    createPersonalInfo(dataSpanish)
    createHero(dataSpanish)
});
  }

const changeAnchorsHeader = (a1,a2,a4,cv) =>{
 if(cv === data){
   a1.textContent = "About me"
   a2.textContent = "Personal"
   a4.textContent = "Projects"
 }else{
   a1.textContent = "Sobre mi"
   a2.textContent = "Personal"
   a4.textContent = "Proyectos"
 }
}
  
  
  