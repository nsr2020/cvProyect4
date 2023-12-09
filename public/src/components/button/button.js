import "./button.css";



export const Button = ({
  texto = "Pon aquí tu texto",
  size = "m",
  color = "black",
  family= "courier"

}) => {
  return `<button class="main-button rotate ${size} ${color} ${family}">${texto}</button>`;
};