

import data from "../../data/cvinfo";
import { main } from "../functionHero/functionHero";
import "./personal.css"

export const createPersonalInfo = (cv=data) =>{
main.innerHTML = ""
const section2 = document.createElement("section")
const articlePer1 = document.createElement("article")
articlePer1.classList.add("article1")
const articlePer2 = document.createElement("article")
articlePer2.classList.add("article2")
const a1= document.createElement("a")
const a2 = document.createElement("a")
const h3 = document.createElement("h3")
const h2 = document.createElement("h2")
const p = document.createElement("p")




  section2.setAttribute("id","education")
  
  section2.classList.add("section2")
  a1.textContent = "👨‍🎓"
  a2.textContent ="💻"
  h3.textContent = cv.education.degree
  h2.textContent = cv.education.university
  p.textContent = cv.education.graduationYear
  a1.classList.add("edu")
  a2.classList.add("job")
  articlePer1.classList.add("artper1")
  articlePer2.classList.add("artper2")


  main.appendChild(section2)
  section2.appendChild(a1)
  section2.appendChild(a2)
  section2.appendChild(articlePer1)
  section2.appendChild(articlePer2)
  articlePer1.appendChild(h3)
  articlePer1.appendChild(h2)
  articlePer1.appendChild(p)
  
  for(const course of cv.education.relevantCourses){
    const p = document.createElement("p")
    p.textContent = course
    p.classList.add("pCourse")
    articlePer1.appendChild(p)
  }
  for(const job of cv.workExperience){

    const divjob = document.createElement("div")
    const h2 = document.createElement("h2")
    const p = document.createElement("p")
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")

    h2.textContent = job.position
    h2.setAttribute("id", "experience")
    p.textContent = job.company
    p1.textContent = `${job.startDate}-${job.endDate}`
    p2.textContent = job.description
    divjob.classList.add("divjob")

    articlePer2.appendChild(divjob)
    divjob.appendChild(h2)
    divjob.appendChild(p)
    divjob.appendChild(p1)
    divjob.appendChild(p2)
  }

  a1.addEventListener("click", function(){
    a1.style.display = "none"
    a2.style.display = "flex"
    articlePer2.style.display ="none"
    articlePer1.style.display = "flex"
  })

  a2.addEventListener("click", function(){
    a1.style.display = "flex"
    a2.style.display = "none"
    articlePer2.style.display ="flex"
    articlePer1.style.display = "none"
  })
  

  }
  




