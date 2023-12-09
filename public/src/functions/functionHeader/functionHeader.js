import data from "../../data/cvinfo"



  
 



export const createHeader = () =>{

  const header = document.createElement("header")
  const h1 = document.createElement("h1")
  const imgh1 = document.createElement("img")
  const ul= document.createElement("ul")
  const l1 = document.createElement("li")
  const a1 = document.createElement("a")
  const l2 = document.createElement("li")
  const a2 = document.createElement("a")
  const l3 = document.createElement("li")
  const a3 =document.createElement("a")
  const l4 = document.createElement("li")
  const a4 = document.createElement("a")
  const bt1 = document.createElement("button")
  const bt2 = document.createElement("button")
  const bt3 = document.createElement("button")
  const bt4 = document.createElement("button")  
  
  h1.textContent = data.name
  a1.textContent = "About me"
  a2.textContent = "Education"
  a3.textContent = "Experience"
  a4.textContent = "Projects"
  bt1.textContent = "🎨"
  bt2.textContent = "🖤"
  bt3.textContent = "🎄"
  bt4.textContent = "🎅"
  a1.href = "#aboutMe"
  a2.href = "#education"
  a3.href = "#experience"
  a4.href = "#projects"
  a1.classList.add("anchors")
  a2.classList.add("anchors")
  a3.classList.add("anchors")
  a4.classList.add("anchors")
  bt1.classList.add("bt1")
  bt2.classList.add("bt2")
  bt3.classList.add("bt3")
  bt4.classList.add("bt4")
  imgh1.src = "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702063059/My%20CV/NAVIDAD_LUCES_36_ubyjex.gif"
  imgh1.classList.add("luces")
  

  
  document.body.appendChild(header)
  header.appendChild(h1)
  header.appendChild(imgh1)
  header.appendChild(bt3)
  header.appendChild(bt4)
  header.appendChild(ul)
  ul.appendChild(l1)
  ul.appendChild(l2)
  ul.appendChild(l3)
  ul.appendChild(l4)
  l1.appendChild(a1)
  l2.appendChild(a2)
  l3.appendChild(a3)
  l4.appendChild(a4)
  header.appendChild(bt1)
  header.appendChild(bt2)

  bt1.addEventListener("click", function () {
    const anchors = document.querySelectorAll(".anchors")
   bt1.style.display = "none"
   bt2.style.display ="flex"
    // Agregar la clase color-changing cuando se hace clic en bt1
    anchors.forEach(anchor => {
      anchor.classList.add("color-changing");
    });
  });

  bt2.addEventListener("click", function () {
    const anchors = document.querySelectorAll(".anchors")
    bt1.style.display = "flex"
   bt2.style.display ="none"
    // Quitar la clase color-changing cuando se hace clic en bt2
    anchors.forEach(anchor => {
      anchor.classList.remove("color-changing");
    });
  });

  //encendido y apagado

  bt3.addEventListener("click", function(){
    bt3.style.display = "none"
    bt4.style.display = "flex"
    imgh1.classList.add("luces")
    imgh1.style.display="flex"
   
  })
  bt4.addEventListener("click", function(){
    bt3.style.display = "flex"
    bt4.style.display = "none"
   
    imgh1.classList.remove("luces")
    imgh1.style.display="none"
   
  })
  

  }

  



  
  
  