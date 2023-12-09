import { Button } from "../../components/button/button";
import data from "../../data/cvinfo";


export const createHero = () => {
  const main = document.createElement("main")
  const section = document.createElement("section")
  const h2 = document.createElement("h2")
  const img = document.createElement("img")
  const btImg = document.createElement("button")
  const btImg2 = document.createElement("button")
  const p = document.createElement("p")
  const a = document.createElement("a")
  const div = document.createElement("div")

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
 

/*   for (const skill of data.skills) {
    const button = document.createElement("button");
    button.textContent = skill;
    div.appendChild(button);
  }   */

  div.innerHTML = `
  ${Button({ texto: "HTML5", size: "m" ,color:"red",family:"courier"})}
  ${Button({ texto: "CSS3", size: "m",color:"green",family:"franklin" })}
  ${Button({ texto: "JavaScript", size: "m",color:"white",family:"gill" })}
  ${Button({ texto: "Node.js", size: "m",color:"black" ,family:"lucida"})}
  ${Button({ texto: "Git", size: "m",color:"blue" ,family:"arial"})}
  ${Button({ texto: "GitHub", size: "m" ,color:"pink",family:"verdana"})}
 
`;
section.appendChild(a)
section.appendChild(p)
 
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
