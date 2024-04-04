import { Card } from "../../components/card/card";
import data from "../../data/cvinfo";
import { main } from "../functionHero/functionHero";
import "./projects.css"

export const createProjects = (cv=data) =>{
    main.innerHTML =""
  const sectionProjects = document.createElement("section")
  sectionProjects.innerHTML=""
 sectionProjects.classList.add("sectionprojects")
 const divh3 = document.createElement("div")
 const h3 = document.createElement("h3")

 if(cv === data){
   h3.textContent = "My Projects"
 }else{
  h3.textContent = "Mis proyectos"
 }

 h3.classList.add("h3project")
 h3.setAttribute("id", "projects")
 sectionProjects.appendChild(h3)
 h3.style.textTransform = "uppercase"
 h3.style.color ="green"
 h3.style.marginTop ="15px"
 h3.style.textDecoration = "underline"
 divh3.append(h3)
 sectionProjects.append(divh3)
 divh3.classList.add("divh3")
 const divArticles = document.createElement("div")
 divArticles.classList.add("divarticles")

 const selectProjects = document.createElement("select")
 const option = document.createElement("option")
 option.value = "Projects"
 option.text ="Projects"
 selectProjects.append(option)

 for( let i =0; i<data.projects.length; i++){
  const option = document.createElement("option")
  option.value = data.projects[i].title
  option.text = data.projects[i].title
  selectProjects.append(option)
 }
 divh3.append(selectProjects)


 let selectedProject = undefined;

 createAllProjects(sectionProjects, divArticles,selectedProject,cv);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




          selectProjects.addEventListener("change", (e) =>{
           
           let selectedProject = e.target.value;
           divArticles.innerHTML =""

            if(selectedProject === "Projects") {
              createAllProjects(sectionProjects,divArticles,)
            }else{
              createAllProjects(sectionProjects,divArticles,selectedProject)
            }
         
          }) 

        

  main.append(sectionProjects)
}






const createAllProjects = (sectionProjects, divArticles,selectedProject,cv) => {
  if(!selectedProject || selectedProject === "Projects"){
    
  for (const carta of cv.projects) {
    const articleProject = document.createElement("article");
   
    Card(
      articleProject,
      carta.image,
      carta.title,
      carta.description,
      carta.skills,
      carta.link,
      carta.preview
    );
    divArticles.appendChild(articleProject)
    sectionProjects.append(divArticles)
  }
}else{
  const selectedProjectData = cv.projects.find(
    (project) => project.title === selectedProject
  );
  if (selectedProjectData) {
  
  const articleProject = document.createElement("article");
  
  Card(
    articleProject,
    selectedProjectData.image,
    selectedProjectData.title,
    selectedProjectData.description,
    selectedProjectData.skills,
    selectedProjectData.link,
    selectedProjectData.preview
  );
  divArticles.appendChild(articleProject)
  sectionProjects.append(divArticles)
  }
}
};



