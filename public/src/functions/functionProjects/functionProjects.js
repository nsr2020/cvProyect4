import { Card } from "../../components/card/card";
import data from "../../data/cvinfo";



export const createProjects = () =>{
 
    const main1 = document.querySelector("main")
  const sectionProjects = document.createElement("section")
  sectionProjects.innerHTML=""
 sectionProjects.classList.add("sectionprojects")
 const divh3 = document.createElement("div")
 const h3 = document.createElement("h3")
 h3.textContent = "My Projects"
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

 for( let i =0; i<4; i++){
  const option = document.createElement("option")
  option.value = data.projects[i].title
  option.text = data.projects[i].title
  selectProjects.append(option)
 }
 divh3.append(selectProjects)


 let selectedProject = undefined;

 createAllProjects(sectionProjects, divArticles,selectedProject);


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

        

  main1.append(sectionProjects)

        

}






const createAllProjects = (sectionProjects, divArticles,selectedProject) => {
  if(!selectedProject || selectedProject === "Projects"){
    
  for (const carta of data.projects) {
    const articleProject = document.createElement("article");
   
    Card(
      articleProject,
      carta.image,
      carta.title,
      carta.description,
      carta.link,
      carta.preview
    );
    divArticles.appendChild(articleProject)
    sectionProjects.append(divArticles)
  }
}else{
  const selectedProjectData = data.projects.find(
    (project) => project.title === selectedProject
  );
  if (selectedProjectData) {
  
  const articleProject = document.createElement("article");
  
  Card(
    articleProject,
    selectedProjectData.image,
    selectedProjectData.title,
    selectedProjectData.description,
    selectedProjectData.link,
    selectedProjectData.preview
  );
  divArticles.appendChild(articleProject)
  sectionProjects.append(divArticles)
  }
}
};



