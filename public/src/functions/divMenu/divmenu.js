import { encenderFooter } from "../../utils/plugfooter/plugfooter"
import { encenderHeader } from "../../utils/plugheader/plugHeader"
import { encenderMain } from "../../utils/plugmain/plugmain"
import "./divmenu.css"

export const divMenu = document.createElement("div")

export const createDivMenu = (imagen) =>{
  divMenu.innerHTML =""
  divMenu.classList.add("divmenu")

  const ul= document.createElement("ul")
  const l1 = document.createElement("li")
  const a1 = document.createElement("a")
  const l2 = document.createElement("li")
  const a2 = document.createElement("a")
  const l3 = document.createElement("li")
  const a3 =document.createElement("a")
  const l4 = document.createElement("li")
  const a4 = document.createElement("a")

  a1.textContent = "About me"
  a2.textContent = "Education"
  a3.textContent = "Experience"
  a4.textContent = "Projects"

  a1.href = "#aboutMe"
  a2.href = "#education"
  a3.href = "#experience"
  a4.href = "#projects"

  a1.classList.add("anchors1")
  a2.classList.add("anchors1")
  a3.classList.add("anchors1")
  a4.classList.add("anchors1")

l1.appendChild(a1)
l2.append(a2)
l3.append(a3)
l4.append(a4)
ul.append(l1)
ul.append(l2)
ul.append(l3)
ul.append(l4)

divMenu.append(ul)


document.body.append(divMenu)

a1.addEventListener("click", () =>{

  divMenu.classList.remove("shown")
  imagen.style.display = "flex"
  encenderFooter()
  encenderHeader()
  encenderMain()
})

a2.addEventListener("click", () =>{
  
  divMenu.classList.remove("shown")
  imagen.style.display = "flex"
  encenderFooter()
  encenderHeader()
  encenderMain()
})

a3.addEventListener("click", () =>{

  divMenu.classList.remove("shown")
  imagen.style.display = "flex"
  encenderFooter()
  encenderHeader()
  encenderMain()
})

a4.addEventListener("click", () =>{

  divMenu.classList.remove("shown")
  imagen.style.display = "flex"
  encenderFooter()
  encenderHeader()
  encenderMain()
})

}