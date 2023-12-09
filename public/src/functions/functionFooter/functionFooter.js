import data from "../../data/cvinfo"

export const  createFooter = ()=>{
 const footer = document.createElement("footer")
 const p = document.createElement("p")

p.textContent = `©️ Created by ${data.name}`

document.body.appendChild(footer)
footer.appendChild(p)

}