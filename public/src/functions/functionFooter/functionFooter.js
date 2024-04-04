import data from "../../data/cvinfo"
import dataSpanish from "../../data/cvinfo_spanish"


export const footer = document.createElement("footer")
export const  createFooter = (cv=data)=>{
 footer.innerHTML =""
 const p = document.createElement("p")

 if(cv === data){
    p.textContent = `©️ Created by ${data.name}`
 }else{
    p.textContent = `©️ Creado por ${dataSpanish.name}`
 }


document.body.appendChild(footer)
footer.appendChild(p)

}