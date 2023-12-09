import { Card } from "../../components/card/card";
import data from "../../data/cvinfo";





export const createProjects = () =>{
  const main1 = document.querySelector("main")
  const sectionProjects = document.createElement("section")
 sectionProjects.classList.add("sectionprojects")
 const h3 = document.createElement("h3")
 h3.textContent = "My Projects"
 h3.classList.add("h3project")
 h3.setAttribute("id", "projects")
 sectionProjects.appendChild(h3)
 h3.style.textTransform = "uppercase"
 h3.style.color ="green"
 h3.style.marginTop ="15px"
 h3.style.textDecoration = "underline"

  for (const carta of data.projects ){
    const articleProject = document.createElement("article")
    Card(articleProject, carta.image, carta.title, carta.description, carta.link, carta.preview)
    sectionProjects.appendChild(articleProject)
  }
  main1.append(sectionProjects)
  sectionProjects.style.borderTop = "3px solid orange"
  sectionProjects.style.width = "100%"


}


/* export const createProjects = () =>{
  const main1 = document.querySelector("main")
  const section3 = document.createElement("section")

  section3.classList.add("section3")

  for(const project of data.projects){
    const article = document.createElement("article")
    const img = document.createElement("img")
    const h2 = document.createElement("h2")
    const p = document.createElement("p")
    const a1 = document.createElement("a")
    const a2 = document.createElement("a")

    img.src = project.image
    h2.textContent = project.title
    p.textContent = project.description
    a1.href = project.link
    a2.href = project.preview
    a1.textContent = "Link GitHub"
    a2.textContent = "Web Project"
    a1.target = "_blank"
    a2.target = "_blank"

    article.appendChild(img)
    article.appendChild(h2)
    article.appendChild(p)
    article.appendChild(a1)
    article.appendChild(a2)

    section3.appendChild(article)



  }
main1.appendChild(section3)

} */