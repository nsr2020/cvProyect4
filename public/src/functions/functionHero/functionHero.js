import { Button } from "../../components/button/button";
import data from "../../data/cvinfo";

export const main = document.createElement("main")
export const createHero = () => {

  const section = document.createElement("section")
  const h2 = document.createElement("h2")
  const img = document.createElement("img")
  const btImg = document.createElement("button")
  const btImg2 = document.createElement("button")
  const p = document.createElement("p")
  const a = document.createElement("a")
  const divp = document.createElement("div")
  divp.classList.add("divp")
  const div = document.createElement("div")
  div.classList.add("divskills")

  h2.textContent = "About me"
  img.src = data.avatar
  p.textContent = data.aboutMe
  a.textContent = "Contact"
  a.href = `mailto:${data.aboutMe}`
  a.target = "_blank"
  btImg.textContent ="🟢"
  btImg.classList.add("btnImg")
  btImg2.textContent = "🔴"
  btImg2.classList.add("btn2Img")
  section.classList.add("sectionHero")
  div.classList.add("divhero")
  main.classList.add("main")
  section.classList.add("section")
  h2.setAttribute("id","aboutMe")

  document.body.appendChild(main)
  main.appendChild(section)
  section.appendChild(h2)
  section.appendChild(img)
  section.appendChild(btImg)
  section.appendChild(btImg2)
  section.appendChild(div)


  div.innerHTML = `
  ${Button({ texto: "HTML5", size: "m" ,color:"red",family:"courier"})}
  ${Button({ texto: "CSS3", size: "m",color:"green",family:"franklin" })}
  ${Button({ texto: "JavaScript", size: "m",color:"white",family:"gill" })}
  ${Button({ texto: "Node.js", size: "m",color:"black" ,family:"lucida"})}
  ${Button({ texto: "Git", size: "m",color:"blue" ,family:"arial"})}
  ${Button({ texto: "GitHub", size: "m" ,color:"pink",family:"verdana"})}
 
`;

  const btns = document.querySelectorAll(".main-button")
  btns.forEach((btn)=>{
    btn.addEventListener("click", () =>{
      if(btn.textContent === "HTML5"){
        const url ="https://lenguajehtml.com/html/"
        window.open(url, "_blank")
      }else if ( btn.textContent === "CSS3"){
        const url ="https://lenguajecss.com/"
        window.open(url, "_blank") 
      }else if ( btn.textContent === "JavaScript"){
        const url ="https://lenguajejs.com/javascript/"
        window.open(url, "_blank") 
      }else if (btn.textContent === "Node.js"){
        const url ="https://openwebinars.net/blog/que-es-nodejs/"
        window.open(url, "_blank") 
      }else if (btn.textContent === "Git"){
        const url ="https://git-scm.com/"
        window.open(url, "_blank") 
      }else{
        const url ="https://github.com/"
        window.open(url, "_blank")  
      }
    })

  })



section.appendChild(a)
divp.append(p)
section.append(divp)
 
  btImg.addEventListener("click", function(){
    btImg.style.display="none"
    btImg2.style.display = "flex"
    img.classList.add("imageAnimation")
  })
  btImg2.addEventListener("click",function(){
    btImg.style.display="flex"
    btImg2.style.display = "none"
    img.classList.remove("imageAnimation")
  })
}
