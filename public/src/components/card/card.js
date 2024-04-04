import data from "../../data/cvinfo";
import "./card.css"

export const Card = ( nodoPadre, imagen, titulo, texto,skills,enlace,web ) => {
  const cardHTML = document.createElement("article");

  cardHTML.className = "card";

  if (imagen) {
      const img = document.createElement("img");
      img.src = imagen;
      cardHTML.appendChild(img);
  }

  const title = document.createElement("h2");
  const p = document.createElement("p");
  const a1 = document.createElement("a")
  const a2 = document.createElement("a")  

  title.textContent = titulo;
  p.textContent = texto
  a1.href = enlace
  a1.href = enlace
  a2.href = web
  a1.textContent="Link de Github"
  a1.target ="_blank"
  a2.textContent = "Web Project"
  a2.target = "_blank"

  cardHTML.appendChild(title);
  cardHTML.appendChild(p);
  const divimgskill = document.createElement('div');
    for (const imgSrc of skills) {
      
      const imgskill = document.createElement("img");
      imgskill.src = imgSrc;
      divimgskill.classList.add("div-skill");
      imgskill.classList.add("img-skill");
      divimgskill.appendChild(imgskill);
      // Suponiendo que cardHTML es un elemento existente en tu documento HTML donde deseas agregar las imágenes de las habilidades
      cardHTML.appendChild(divimgskill);
    }
  
  cardHTML.appendChild(a1)
  cardHTML.appendChild(a2)

  nodoPadre.appendChild(cardHTML);
}