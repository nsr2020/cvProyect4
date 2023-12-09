import "./card.css"

export const Card = ( nodoPadre, imagen, titulo, texto,enlace,web ) => {
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
  a2.href = web
  a1.textContent="Link de Github"
  a1.target ="_blank"
  a2.textContent = "Web Project"
  a2.target = "_blank"

  cardHTML.appendChild(title);
  cardHTML.appendChild(p);
  cardHTML.appendChild(a1)
  cardHTML.appendChild(a2)

  nodoPadre.appendChild(cardHTML);
}