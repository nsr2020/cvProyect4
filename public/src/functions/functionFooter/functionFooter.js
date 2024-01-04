import data from "../../data/cvinfo"
export const footer = document.createElement("footer")
export const  createFooter = ()=>{
 
 const p = document.createElement("p")

p.textContent = `©️ Created by ${data.name}`

document.body.appendChild(footer)
footer.appendChild(p)

}