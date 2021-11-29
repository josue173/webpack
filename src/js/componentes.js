import "../css/componentes.css";
// import log from "../assets/img/webpack-logo.png";

export const saludar = (nombre) => {
  console.log("Creando la etiqueta H1");
  console.log(`Hola ${nombre}`);
  const h1 = document.createElement("h1");
  h1.innerText = `Hola ${nombre}`;
  document.body.append(h1);
  // IMG
  // console.log(log);
  // const img = document.createElement("img");
  // img.src = log;
  // document.body.append(img);
};
